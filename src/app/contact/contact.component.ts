import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() contact !: Contact

  private route : Router
  private contactService : ContactService

  constructor(route : Router,contactService : ContactService){
    this.route = route;
    this.contactService = contactService
  }

  onViewContact() : void {
    this.route.navigateByUrl(`/${this.contact.id}`)
  }
  onDelete() : void {
    try {
      this.contactService.deleteContact(this.contact.id);
      location.reload()
    } catch (error) {
      throw error
    }
  }
}
