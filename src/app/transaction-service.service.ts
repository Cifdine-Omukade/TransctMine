import { Label } from './label';
import { Transaction } from './transaction';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  transactions!: Transaction[];
  constructor( private http : HttpClient) { }

  getTransactionList(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('api/transactions').pipe(
      tap(response => this.log(response) ),
      catchError(err => this.handleError(err, []) )
    );
  }

  getTransaction( id: number):Observable<Transaction | undefined> {
    return this.http.get<Transaction>(`api/transactions/${id}`).pipe(
      tap(response => this.log(response) ),
      catchError(err => this.handleError(err, undefined) )

    )
  }
  // Le fonctionnment d' InMemoryWebApi ne me renvoyant pas l'objet modifié je type donc la valeur de retour ainsi
  updateTransaction( transaction : Transaction) : Observable<null> {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }
    
    return this.http.put<Transaction>(`api/transactions`, transaction , httpOptions).pipe( tap(response => this.log(response) ),
    catchError(err => this.handleError(err, null) ))
  }

  deleteTransaction( transactionId: number): Observable<null>{
    return this.http.delete<Transaction>(`api/transactions/${transactionId}`).pipe(
      tap((res) => this.log(res)),
      catchError((error) =>this.handleError(error, null))
    )
  }
  addTransaction( transaction : Transaction ) : Observable<Transaction>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }

    return this.http.post<Transaction>('api/transactions', transaction , httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError((error) =>this.handleError(error, null))
    )
    
  };
  
  getColorLabel(transaction: Transaction) : string {
    return transaction.label.color;
  }
  getLabel(): Label[] {
    
    let labelList = [
    { id: 1, name: "Alimentaire", color:"orange"},
    {id:2,name:"Banque et Assurances",color:"red"},
    {id:3,name: "Energies",color:"green"},
    {id:4,name: "Loisirs",color:"yellow"},
    {id:5 ,name: "Impots",color:'brown'},
    {id:6,name: "Loyer" , color:"purple"}
   ];
   return labelList;
  }
  private log(response : Transaction[] | Transaction | undefined){
    console.table(response);
  }

  private handleError(error : Error , errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
} 

 
 
