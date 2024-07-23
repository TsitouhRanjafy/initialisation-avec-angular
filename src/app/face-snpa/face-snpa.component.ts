import { Component, Input, input, OnInit } from '@angular/core';
import { Facesnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true, 
  imports: [],
  templateUrl: './face-snpa.component.html',
  styleUrl: './face-snpa.component.scss'
})
export class FaceSnpaComponent implements OnInit{
  @Input() facesnap !: Facesnap;
  snapButtonText !: string;

  ngOnInit(): void {
    this.snapButtonText = 'Oh snap!'
  }


  addSnap() : void {
    if (this.snapButtonText == 'Oh snap!'){
      this.snapButtonText = 'Oops , un snap';
      this.facesnap.addSnap();
    } else {
      this.snapButtonText = 'Oh snap!';
      this.facesnap.removeSnap();
    }
  }
}
