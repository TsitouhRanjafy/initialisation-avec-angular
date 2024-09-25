export class Contact {
    id : string;
    name : string;
    numero : string;
    imageUrl : URL;

    constructor(name : string, numero : string,imageUrl : URL){
        this.name = name;
        this.numero = numero;
        this.id = crypto.randomUUID().substring(0,8);
        this.imageUrl = imageUrl
    }

    
}