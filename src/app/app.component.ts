import { Component, OnInit } from '@angular/core';
import { SingleContactComponent } from "./single-contact/single-contact.component";
import { ContactListComponent } from './contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SingleContactComponent,
    ContactListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
