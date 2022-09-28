import { TransactionServiceService } from './../transaction-service.service';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from './../transaction';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements OnInit {

  transaction!: Transaction | undefined;
  transactionId! : number;
  constructor(private route : ActivatedRoute , private service : TransactionServiceService) { }

  ngOnInit(): void {

    const transactionId  = +this.route.snapshot.paramMap.get('id')!;
    if(transactionId){
      this.service.getTransaction(transactionId).subscribe(transaction => this.transaction = transaction);
    }else{
      this.transaction = undefined;
    }
  }


}
