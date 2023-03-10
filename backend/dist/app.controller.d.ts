import { AppService } from "./app.service";
import { RequestTokensDTO } from "./dtos/requestToken.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getContractAddress(): {
        result: string;
    };
    getTotalSupply(): Promise<number>;
    getAllowance(from: string, to: string): Promise<number>;
    getTransaction(hash: string): Promise<import("@ethersproject/abstract-provider").TransactionResponse>;
    requestTokens(body: RequestTokensDTO): {
        result: {
            txHash: string;
            address: string;
            amount: number;
        };
    };
}
