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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const requestToken_dto_1 = require("./dtos/requestToken.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getContractAddress() {
        return { result: this.appService.getContractAddress() };
    }
    getTotalSupply() {
        return this.appService.getTotalSupply();
    }
    getAllowance(from, to) {
        console.log("Getting allowance from " + from + " to " + to);
        return this.appService.getAllowance(from, to);
    }
    getTransaction(hash) {
        return this.appService.getTransaction(hash);
    }
    requestTokens(body) {
        return { result: this.appService.requestTokens(body.address, body.amount) };
    }
};
__decorate([
    (0, common_1.Get)("contract-address"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getContractAddress", null);
__decorate([
    (0, common_1.Get)("total-supply"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTotalSupply", null);
__decorate([
    (0, common_1.Get)("allowance"),
    __param(0, (0, common_1.Query)("from")),
    __param(1, (0, common_1.Query)("to")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllowance", null);
__decorate([
    (0, common_1.Get)("transaction/:hash"),
    __param(0, (0, common_1.Param)("hash")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getTransaction", null);
__decorate([
    (0, common_1.Post)("request-tokens"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [requestToken_dto_1.RequestTokensDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "requestTokens", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map