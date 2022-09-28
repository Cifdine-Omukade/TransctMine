import { Label } from './../label';
import { Router } from '@angular/router';
import { Transaction } from './../transaction';
import { Component, OnInit, Input } from '@angular/core';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

   
  constructor(private router: Router, private service : TransactionServiceService ) { }

  @Input() transaction!: Transaction;

  labelList! : Label[];
  isAddForm! : boolean;
  
  ngOnInit(): void {

    this.labelList = this.service.getLabel();
    this.isAddForm = this.router.url.includes('add');
    console.table(this.labelList)
  

  }
  
  hasLabel(transaction:Transaction): boolean{
    return this.labelList.includes(transaction.label); 
  }

  /*
  selectLabel($event : Event, label:Label){

    const isChecked : boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.transaction.label =  isChecked.valueOf
    }

  } */

  goBack(): void {
        
    let link = ['/transaction', this.transaction.id];
    this.router.navigate(link);
}
  onSubmit() {
    
    console.log('submit form');

    if(!this.isAddForm){
    this.service.updateTransaction(this.transaction).subscribe(
      () => { this.router.navigate(['/transaction', this.transaction.id])}
      
    )
  }else{
    this.service.addTransaction(this.transaction).subscribe(
      () => { this.router.navigate(['/transactions'])}
    )
  }
    
  };
}
