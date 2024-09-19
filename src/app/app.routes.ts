import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnpaComponent } from './single-face-snpa/single-face-snpa.component';





export const routes: Routes = [
    { path : '', component : LandingPageComponent },
    { path : 'facesnaps/:id', component : SingleFaceSnpaComponent },
    { path : 'facesnaps', component : FaceSnapListComponent },
];
