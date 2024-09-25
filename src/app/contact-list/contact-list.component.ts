import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { Contact } from '../models/contact.model';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    ContactComponent
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent implements OnInit{
  contacts !: Contact[]
  private contactService : ContactService

  constructor(contactService : ContactService){
    this.contactService = contactService;
  }

  async ngOnInit() {
    this.contacts = await this.contactService.getsContact();
  }

  async onAdd() : Promise<void> {
    this.contactService.addContact("Lahatra","+261 33 23 032 53")
    this.contacts = await this.contactService.getsContact();
  }

}
