import { Component, OnInit } from '@angular/core';
import { Facesnap } from '../models/face-snap';
import { FaceSnpaComponent } from '../face-snpa/face-snpa.component';
import { FaceSnapsService } from '../service/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnpaComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})


export class FaceSnapListComponent implements OnInit{
  faceSnaps !: Facesnap[];
  private faceSnapService !: FaceSnapsService;

  constructor(faceSnapService : FaceSnapsService){
    this.faceSnapService = faceSnapService;
  }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getFaceSnap();
  }
}
