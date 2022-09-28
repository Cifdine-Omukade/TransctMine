import { Transaction } from './../transaction';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  
  transactionList! : Transaction[];
  transaction! : Transaction | undefined;
  id! : number;

  constructor(private route: ActivatedRoute , private router : Router , private service: TransactionServiceService) { }

  ngOnInit(): void {
    
    
    const transactionId : number = +this.route.snapshot.paramMap.get('id')!
    
    

    if(transactionId){
      this.service.getTransaction(transactionId).subscribe(transaction => this.transaction = transaction);}
    }
    
    goToEdit(transaction: Transaction){

      this.router.navigate(['/edit/transaction', transaction.id])

    }
    
    
    goBack() : void{
      this.router.navigate(['/transactions'])
    }

    goDelete(transactionId: number){
      this.service.deleteTransaction(transactionId).subscribe(
        () => this.router.navigate(['/transactions'])
      )
    }

    
}
