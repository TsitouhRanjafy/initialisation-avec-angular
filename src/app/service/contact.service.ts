import { Injectable } from "@angular/core";
import { Contact } from "../models/contact.model";

@Injectable({
    providedIn : 'root'
})

export class ContactService{

    addContact( name : string, numberPhone : string) : void {
        const data = {
            name : name,
            numberPhone : numberPhone
        }
        fetch("http://localhost:8080/add",{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then((response) => {
            if (!response.ok){
                throw new Error("Erreur lors de l\'ajout du contact")
            }
        })
        .catch((error) => { throw new Error("Erreur Serveur!") } )
    }

    async getsContact() : Promise<Contact[]> {
        try {
            const response = await fetch('http://localhost:8080/gets',{
                method : "GET",
                headers : {
                    "Content-type" : "application/json"
                }
            });
            if (!response){
                throw new Error("Erreurs lors de la récupération des contacts");
            }
            const data : Contact[] = await response.json()
            return data
        } catch (error) {
            throw error
        } 
    }

    async findContactById(contactId : string) : Promise<Contact>{
        try {
            const response = await fetch(`http://localhost:8080/get/${contactId}`,{
                method : "GET",
                headers : {
                    "Content-type" : "application/json"
                }
            });
            if (!response){
                throw new Error("Erreurs lors de la récupération des contacts");
            }
            const data : Contact = await response.json()
            return data
        } catch (error) {
            throw error
        }
    }

    deleteContact(contactId : string) : void {
        fetch(`http://localhost:8080/delete/${contactId}`,{
            method : "DELETE",
            headers : {
                "Contact-type" : "application/json"
            }
        })
        .then((response) =>{
            if(!response){
                throw new Error("Erreur lors de la supression d'un contact")
            }
        })
        
    }
}