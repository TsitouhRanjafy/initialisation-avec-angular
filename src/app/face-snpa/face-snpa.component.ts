import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true, 
  imports: [],
  templateUrl: './face-snpa.component.html',
  styleUrl: './face-snpa.component.scss'
})
export class FaceSnpaComponent implements OnInit {
  title !: string;
  description !: string;
  creatAt !: Date;
  snap !: number;
  image !: string;

  ngOnInit(): void {
    this.title = 'Archival',
    this.description = 'Mon meilleur amis depuis toujours',
    this.creatAt = new Date(),
    this.snap = 0,
    this.image = '../../../public/image/batiment.png'
  }
}
