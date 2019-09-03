import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active = {
  }
  log:Boolean;

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

  displayForm = (t) => {
    this.log = t;
    this.active = {
      signIn: true,
      create: false
    }
    this.router.navigate(['/signIn'])
  }
}
