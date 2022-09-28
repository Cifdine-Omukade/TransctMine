import { Transaction } from './../transaction';
import { Component, OnInit } from '@angular/core';
import { Label } from '../label';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  constructor() { }

  transaction! : Transaction;

  ngOnInit(): void {

    this.transaction = new Transaction(new Date(), new Label( "Meri de labellisé ", 'color?'), 0 , 'creditor ?' , 'debitor ?');
  }

}
