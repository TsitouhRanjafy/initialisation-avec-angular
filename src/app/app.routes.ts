import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SingleContactComponent } from './single-contact/single-contact.component';


export const routes: Routes = [
    { path : '',component : ContactListComponent },
    { path : 'contact/:id', component : SingleContactComponent}
];
