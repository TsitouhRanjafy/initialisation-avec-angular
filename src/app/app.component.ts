import { Component, OnInit } from '@angular/core';
import { FaceSnpaComponent } from './face-snpa/face-snpa.component';
import { Facesnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports : [
    FaceSnpaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap !: Facesnap;
  firstSnap !: Facesnap;
  secondSnap !: Facesnap;
  lastSnapt !: Facesnap;

  ngOnInit(): void {
    this.mySnap = new Facesnap(
      'Batimax',
      'Le meilleur entreprise',
      new Date(),
      14,
      'https://pixabay.com/get/g155f3e032350bc0f350690bef9ad9f0617226b123ed80dcf8e7890e280524818a5ecaafb80414071868003283db44a4704b9bdef7eb71f0e4cefef51638ca628_1280.png'
    )
    this.firstSnap = new Facesnap(
      'Nageur',
      'Nageur le plus rapide du 2024',
      new Date(),
      38,
      'https://pixabay.com/get/g0dfbab758fab9c361a817375293629ce3d29b6e05aa6b343c9e5a4c156e8159eaf683917aa17feef935ccc992ada74e03429097217247916ad15e766e4243787_1280.jpg'
    )
    this.secondSnap = new Facesnap(
      'Terre 2047',
      '',
      new Date(),
      157,
      'https://pixabay.com/get/g13d530c617ab7494650dbcf2239b2ed6891cb7c05fc7ab16e3f0e89dc69282850113ca6ebdb89fd68c46209edfa6aac1de347dcb33f3e9b740b7514617a5d467_1280.jpg'
    )
    this.lastSnapt = new Facesnap(
      'Muffin',
      'Recette du jour',
      new Date(),
      90,
      'https://pixabay.com/get/g6b3973460da887e8c289fa1517833c974bb8ab8d1da0f357e069bbffc2c0565e4f4c97053331ab9e0841f1a02242cf312a99f545a4e00ba46c7f21a74e6ac6e2_1280.jpg'
    )
  }

}
