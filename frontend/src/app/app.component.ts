import { Component } from '@angular/core';
import { ethers } from 'ethers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  blockNumber: number | string | undefined;
  transactions: string[] | undefined;

  constructor() {}
  syncBlock() {
    this.blockNumber = ' Loading...';
    const provider = ethers.providers.getDefaultProvider('goerli');
    provider.getBlock('latest').then((block) => {
      this.blockNumber = block.number;
      this.transactions = block.transactions;
    });
  }

  clearBlock() {
    this.blockNumber = undefined;
  }
}
