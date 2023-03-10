import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BigNumber, Contract, ethers, utils, Wallet } from 'ethers';
import tokenJson from '../assets/MyToken.json';

const TOKEN_ADDRESS_API_URL = 'http://localhost:3000/contract-address';
const TOKEN_MINT_API_URL = 'http://localhost:3000/request-tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  blockNumber: number | string | undefined;
  userWallet: Wallet | undefined;
  provider: ethers.providers.BaseProvider;
  userBalance: number | undefined;
  userTokenBalance: number | undefined;
  tokenContractAddress: string | undefined;
  tokenContract: Contract | undefined;
  tokenSupply: number | undefined;

  constructor(private http: HttpClient) {
    this.provider = ethers.providers.getDefaultProvider('goerli');
  }

  syncBlock() {
    this.blockNumber = ' Loading...';
    this.provider.getBlock('latest').then((block) => {
      this.blockNumber = block.number;
    });
    this.http
      .get<{ result: string }>(TOKEN_ADDRESS_API_URL)
      .subscribe((answer) => {
        this.tokenContractAddress = answer.result;
        this.getTokenInfo();
      });
  }

  getTokenInfo() {
    if (!this.tokenContractAddress) return;
    this.tokenContract = new Contract(
      this.tokenContractAddress,
      tokenJson.abi,
      this.userWallet ?? this.provider
    );
    this.tokenContract['totalSupply']().then((totalSuplyBN: BigNumber) => {
      const totalSupplyStr = utils.formatEther(totalSuplyBN);
      this.tokenSupply = parseFloat(totalSupplyStr);
    });
  }

  clearBlock() {
    this.blockNumber = undefined;
  }

  createWallet() {
    this.userWallet = Wallet.createRandom().connect(this.provider);
    this.userWallet.getBalance().then((balanceBN) => {
      const balanceStr = utils.formatEther(balanceBN);
      this.userBalance = parseFloat(balanceStr);
    });
    this.tokenContract?.['balanceOf'](this.userWallet?.address).then(
      (tokenBalanceBN: BigNumber) => {
        const tokenBalanceStr = utils.formatEther(tokenBalanceBN);
        this.userTokenBalance = parseFloat(tokenBalanceStr);
      }
    );
  }

  requestTokens(value: string) {
    const body = { address: this.userWallet?.address, value: value };
    this.http
      .post<{ result: any }>(TOKEN_MINT_API_URL, body)
      .subscribe((ans) => {
        console.log({ ans });
      });
  }
}
