import { Component, Injectable, OnInit, SimpleChange } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../service/contact.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-contact',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './single-contact.component.html',
  styleUrl: './single-contact.component.scss'
})
export class SingleContactComponent implements OnInit{
  contact !: Contact;
  private contactService : ContactService
  private route : ActivatedRoute

  constructor(contactService : ContactService, route : ActivatedRoute){
    this.contactService = contactService;
    this.route = route;
  }

  ngOnInit(): void {
    this.getContact();
  }

  private getContact() : void {
    const contactId : string = this.route.snapshot.params['id']
    this.contact = this.contactService.findContactById(contactId)
  }

}
