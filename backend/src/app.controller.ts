import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { PaymentClaim } from "./models/paymentClaim.model";
import { PaymentOrder } from "./models/paymentOrder.model";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("contract-address")
  getContractAddress(): string {
    return this.appService.getContractAddress();
  }

  @Get("total-supply")
  getTotalSupply(): Promise<number> {
    return this.appService.getTotalSupply();
  }

  @Get("allowance")
  getAllowance(
    @Query("from") from: string,
    @Query("to") to: string
  ): Promise<number> {
    console.log("Getting allowance from " + from + " to " + to);
    return this.appService.getAllowance(from, to);
  }

  @Get("transaction/:hash")
  getTransaction(@Param("hash") hash: string) {
    return this.appService.getTransaction(hash);
  }

  @Get("payment-orders")
  getPaymentOrders() {
    return this.appService.getPaymentOrders();
  }

  @Post("payment-order")
  createPaymentOrder(@Body() body: PaymentOrder) {
    return this.appService.createPaymentOrder(body.value, body.secret);
  }

  // Build a post for claim payment
  @Post("claim-payment")
  claimPayment(@Body() body: PaymentClaim) {
    return this.appService.claimPayment(body.id, body.secret, body.address);
  }
}
