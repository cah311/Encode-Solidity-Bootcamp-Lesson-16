import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { RequestTokensDTO } from "./dtos/requestToken.dto";
import { PaymentClaim } from "./models/paymentClaim.model";
import { PaymentOrder } from "./models/paymentOrder.model";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("contract-address")
  getContractAddress(): { result: string } {
    return { result: this.appService.getContractAddress() };
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

  @Post("request-tokens")
  requestTokens(@Body() body: RequestTokensDTO) {
    return { result: this.appService.requestTokens(body.address, body.amount) };
  }
}
