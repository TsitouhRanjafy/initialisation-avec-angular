import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../service/contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  @Input() contact !: Contact

  private contactService : ContactService
  private route : ActivatedRoute

  constructor(contactService : ContactService, route : ActivatedRoute){
    this.contactService = contactService;
    this.route = route;
  }

  ngOnInit(): void {
    
  }

}
