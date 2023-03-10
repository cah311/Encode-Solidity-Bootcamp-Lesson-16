import { ethers } from "ethers";
export declare class AppService {
    [x: string]: any;
    provider: ethers.providers.BaseProvider;
    contract: ethers.Contract;
    constructor();
    getContractAddress(): string;
    getTotalSupply(): Promise<number>;
    getAllowance(from: string, to: string): Promise<number>;
    getTransaction(hash: string): Promise<ethers.providers.TransactionResponse>;
    requestTokens(address: string, amount: number): {
        txHash: string;
        address: string;
        amount: number;
    };
}
