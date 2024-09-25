import { Injectable } from "@angular/core";
import { Contact } from "../models/contact.model";

@Injectable({
    providedIn : 'root'
})

export class ContactService{
    private contact : Contact[] = [
        new Contact(
            "tsitohaina",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Tsanta",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "RAMIARANJAFY",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Felana",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
        ),
        new Contact(
            "Simon",
            "+261 38 20 002 43",
            new URL("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
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