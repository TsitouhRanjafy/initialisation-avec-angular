import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  private activatedRoute : ActivatedRoute
  private route : Router

  constructor(activedRoute : ActivatedRoute,route : Router){
    this.activatedRoute = activedRoute
    this.route = route
  }

  ngOnInit(): void {
    const contactId : string = this.activatedRoute.snapshot.params['id']
    if (!contactId){
      this.route.navigateByUrl("");
    }
  }
}
