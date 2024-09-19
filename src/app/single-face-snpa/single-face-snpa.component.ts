import { Component, OnInit } from '@angular/core';
import { Facesnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../service/face-snaps.service';
import { ActivatedRoute, ActivationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
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
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './single-face-snpa.component.html',
  styleUrl: './single-face-snpa.component.scss'
})
export class SingleFaceSnpaComponent implements OnInit{
  facesnap !: Facesnap;

  snapButtonText !: string;
  userHasSnapped !: boolean;
  myLargeNumber : number = 37.14
  myPercentNumber : number = 0.258
  mySalary : number = 346
  
  private faceSnapService : FaceSnapsService;
  private route : ActivatedRoute;

  constructor(faceSnapService : FaceSnapsService,route: ActivatedRoute){
    this.faceSnapService = faceSnapService
    this.route = route
  }

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
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

  private getFaceSnap(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.facesnap = this.faceSnapService.findFaceSnapById(faceSnapId)
  }

  private prepareInterface(){
    this.snapButtonText = 'Oh snap!'
    this.userHasSnapped = false
  }
}
