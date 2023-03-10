import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { ethers } from "ethers";
import * as tokenJson from "./assets/MyToken.json";
import { PaymentOrder } from "./models/paymentOrder.model";
import { PaymentClaim } from "./models/paymentClaim.model";
import * as dotenv from "dotenv";
dotenv.config();

const CONTRACT_ADDRESS = "0xE2EF249E4aBeC90c8c319A4BA5e3A0b515715c10";

@Injectable()
export class AppService {
  provider: ethers.providers.BaseProvider;
  contract: ethers.Contract;

  paymentOrders: PaymentOrder[];

  constructor() {
    this.provider = ethers.getDefaultProvider("goerli");
    this.contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      tokenJson.abi,
      this.provider
    );
    this.paymentOrders = [];
  }

  getContractAddress(): string {
    return CONTRACT_ADDRESS;
  }

  async getTotalSupply(): Promise<number> {
    const totalSupplyBN = await this.contract.totalSupply();
    const totalSupplyString = ethers.utils.formatEther(totalSupplyBN);
    const totalSupplynumber = parseFloat(totalSupplyString);
    return totalSupplynumber;
  }

  async getAllowance(from: string, to: string): Promise<number> {
    const allowanceBN = await this.contract.allowance(from, to);
    const allowanceString = ethers.utils.formatEther(allowanceBN);
    const allowanceNumber = parseFloat(allowanceString);
    return allowanceNumber;
  }

  async getTransaction(
    hash: string
  ): Promise<ethers.providers.TransactionResponse> {
    return this.provider.getTransaction(hash);
  }

  getPaymentOrders() {
    return this.paymentOrders.map((po) => {
      return { value: po.value, id: po.id };
    });
  }

  createPaymentOrder(value: number, secret: string): number {
    const newPaymentOrder = new PaymentOrder();
    newPaymentOrder.value = value;
    newPaymentOrder.secret = secret;
    newPaymentOrder.id = this.paymentOrders.length;
    this.paymentOrders.push(newPaymentOrder);
    return newPaymentOrder.id;
  }

  async claimPayment(id: number, secret: string, address: string) {
    const paymentOrder = this.paymentOrders.find((p) => p.id === id);

    if (!paymentOrder) {
      throw new NotFoundException("Payment order not found");
    }

    if (paymentOrder.secret !== secret) {
      throw new ForbiddenException("Invalid Secret");
    }

    const privateKey = process.env.PRIVATE_KEY;

    if (!privateKey) {
      throw new InternalServerErrorException("Wrong server configuration");
    }

    const signer = new ethers.Wallet(privateKey, this.provider);

    const tx = await this.contract
      .connect(signer)
      .mint(address, ethers.utils.parseEther(paymentOrder.value.toString()));

    const txReceipt = await tx.wait();

    console.log(txReceipt);
  }
}
