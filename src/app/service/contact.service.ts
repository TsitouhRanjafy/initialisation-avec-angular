import { Injectable } from "@angular/core";
import { Contact } from "../models/contact.model";

@Injectable({
    providedIn : 'root'
})

export class ContactService{
    private contact : Contact[] = [
        new Contact(
            "Tsitohaina",
            "+261 38 20 002 43"
        ),
        new Contact(
            "Tsanta",
            "+261 38 20 002 43"
        ),
        new Contact(
            "RAMIARANJAFY",
            "+261 38 20 002 43"
        ),
        new Contact(
            "Felana",
            "+261 38 20 002 43"
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43"
        )
    ]

    getContact() : Contact[]{
        return [...this.contact]
    }

    findContactById(contactId : string) : Contact {
        for (const element of this.contact){
            if (element.id === contactId){
                return element
            }
        }
        throw new Error("contact not found!");
    }

}