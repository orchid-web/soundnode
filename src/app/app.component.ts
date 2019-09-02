import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active = {
    signIn: false,
    create: false
  }
  constructor(private router: Router) {

  }

  link = (link) => {
    this.active = {
      signIn: false,
      create: false
    }
    this.active[link] = true;
    this.router.navigate(['/'+link])
  }
}
