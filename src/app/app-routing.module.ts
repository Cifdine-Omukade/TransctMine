import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'edit/transaction/:id', component: EditTransactionComponent},
  { path: 'add-transaction', component: AddTransactionComponent },
  { path: 'transactions' , component: TransactionListComponent},
  { path: 'transaction/:id', component : TransactionDetailComponent},
  
  { path:'' , redirectTo : 'transactions', pathMatch : 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
