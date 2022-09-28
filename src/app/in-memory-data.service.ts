import { TRANSACTIONS } from './mock-transaction';
import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const transactions = TRANSACTIONS
    return {transactions}
  }  
   


}
