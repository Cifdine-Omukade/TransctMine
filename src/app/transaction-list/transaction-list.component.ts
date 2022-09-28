import { Router } from '@angular/router';
import { TRANSACTIONS } from './../mock-transaction';
import { Transaction } from './../transaction';
import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from '../transaction-service.service';
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  constructor(private router : Router , private service: TransactionServiceService) { }

   transaction!: Transaction;
   transactionList! : Transaction[];
  
   ngOnInit(): void {

    this.service.getTransactionList().subscribe( transactionList => this.transactionList = transactionList);
    
  }
  goDetail(transaction : Transaction): void {
    this.router.navigate(["transaction", transaction.id])
  }

  goCreate() : void {

    this.router.navigate(['/add-transaction']);
  }
}
