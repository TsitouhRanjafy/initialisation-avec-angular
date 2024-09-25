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

  constructor(route : Router){
    this.route = route;
  }

  onViewContact() : void {
    this.route.navigateByUrl(`/${this.contact.id}`)
  }
}
