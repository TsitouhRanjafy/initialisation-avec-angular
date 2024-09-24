export class Contact {
    id : string;
    name : string;
    numero : string;

    constructor(name : string, numero : string){
        this.name = name;
        this.numero = numero;
        this.id = crypto.randomUUID().substring(0,8);
    }

    
}