import { Label } from './label';

export class Transaction {
    constructor(
        date:Date,label:Label,amount:number,creditor?: string, debitor?:string){
    
    this.date = date;
    this.label = new Label( '', '');
    this.amount = amount;
    this.creditor = creditor;
    this.debitor = debitor;
    
    }

    id!:number;
    date! : Date;
    label!: Label;
    amount!: number;
    creditor?: string ;
    debitor?:string;
    
}