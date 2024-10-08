import { Component, Input, OnInit } from '@angular/core';
import { Facesnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../service/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true, 
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './face-snpa.component.html',
  styleUrl: './face-snpa.component.scss'
})
export class FaceSnpaComponent implements OnInit{
  @Input() facesnap !: Facesnap;

  snapButtonText !: string;
  userHasSnapped !: boolean;
  myLargeNumber : number = 37.14
  myPercentNumber : number = 0.258
  mySalary : number = 346
  
  private faceSnapService : FaceSnapsService;
  private route : Router

  constructor(faceSnapService : FaceSnapsService,route : Router){
    this.faceSnapService = faceSnapService
    this.route = route
  }

  ngOnInit(): void {
    this.snapButtonText = 'Oh snap!'
    this.userHasSnapped = false
  }

  onSnap() : void {
    if (this.snapButtonText == 'Oh snap!'){
      this.snapButtonText = 'Oops , un snap';
      this.faceSnapService.snapFaceSnapById(this.facesnap.id,"snap")
      this.userHasSnapped = true
    } else {
      this.snapButtonText = 'Oh snap!';
      this.faceSnapService.snapFaceSnapById(this.facesnap.id,"unsnap")
      this.userHasSnapped = false
    }
  }

  onViewFaceSnap(){
    this.route.navigateByUrl(`facesnaps/${this.facesnap.id}`)
  }
}
