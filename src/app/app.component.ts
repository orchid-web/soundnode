import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  active = {};
  log:Boolean;

  constructor(private router: Router, private data: DataService) {
  }

  ngOnInit(): void {
    this.log = false;
    this.data.observableLog.subscribe((valeur)=> {
      this.log = valeur;
    })
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
