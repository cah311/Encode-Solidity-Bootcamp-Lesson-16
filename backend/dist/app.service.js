"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const ethers_1 = require("ethers");
const tokenJson = require("./assets/MyToken.json");
const CONTRACT_ADDRESS = "0xE2EF249E4aBeC90c8c319A4BA5e3A0b515715c10";
let AppService = class AppService {
    constructor() {
        this.provider = ethers_1.ethers.getDefaultProvider("goerli");
        this.contract = new ethers_1.ethers.Contract(CONTRACT_ADDRESS, tokenJson.abi, this.provider);
    }
    getContractAddress() {
        return CONTRACT_ADDRESS;
    }
    async getTotalSupply() {
        const totalSupplyBN = await this.contract.totalSupply();
        const totalSupplyString = ethers_1.ethers.utils.formatEther(totalSupplyBN);
        const totalSupplynumber = parseFloat(totalSupplyString);
        return totalSupplynumber;
    }
    async getAllowance(from, to) {
        const allowanceBN = await this.contract.allowance(from, to);
        const allowanceString = ethers_1.ethers.utils.formatEther(allowanceBN);
        const allowanceNumber = parseFloat(allowanceString);
        return allowanceNumber;
    }
    async getTransaction(hash) {
        return this.provider.getTransaction(hash);
    }
    requestTokens(address, amount) {
        return { txHash: "txHash", address: address, amount: amount };
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map