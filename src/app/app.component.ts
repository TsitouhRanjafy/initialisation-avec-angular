import { Component, OnInit } from '@angular/core';
import { SingleContactComponent } from "./single-contact/single-contact.component";
import { ContactListComponent } from './contact-list/contact-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
