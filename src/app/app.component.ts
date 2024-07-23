import { Component } from '@angular/core';
import { FaceSnpaComponent } from './face-snpa/face-snpa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports : [
    FaceSnpaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
