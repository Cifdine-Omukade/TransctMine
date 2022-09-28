export class Label {
    constructor( name:string, color:string){
        
        this.color = color;
        this.name = name;
    }
    id! : number;
    name!: string;
    color!: string;
}