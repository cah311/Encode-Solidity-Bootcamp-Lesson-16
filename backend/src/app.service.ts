import { Injectable } from "@nestjs/common";
import { ethers } from "ethers";
import * as tokenJson from "./assets/MyToken.json";

const CONTRACT_ADDRESS = "0xE2EF249E4aBeC90c8c319A4BA5e3A0b515715c10";

@Injectable()
export class AppService {
  [x: string]: any;
  provider: ethers.providers.BaseProvider;
  contract: ethers.Contract;

  constructor() {
    this.provider = ethers.getDefaultProvider("goerli");
    this.contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      tokenJson.abi,
      this.provider
    );
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

  requestTokens(address: string, amount: number) {
    // TODO
    // Pick your minter puyblic key from env
    // Create a signer
    // Connect the signer to the contract
    // Mint Value to the Address
    return { txHash: "txHash", address: address, amount: amount };
  }
}
