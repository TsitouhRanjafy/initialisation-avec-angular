import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  private router : Router

  constructor(router : Router){
    this.router = router
  }

  onContinue(){
    this.router.navigateByUrl("facesnaps")
  }
}
