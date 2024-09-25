import { stringify } from "uuid";

export class Contact{
    id : string;
    name : string;
    numberPhone: string;
    imageUrl : URL;

    constructor(id : string,name : string, numero : string,imageUrl : string){
        this.id = id;
        this.name = name;
        this.numberPhone = numero;
        this.imageUrl = new URL(imageUrl)
    }
}