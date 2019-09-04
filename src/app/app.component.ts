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
  navLog: Boolean;//Menu login create
  linkLog: Boolean;// Lien log in log out

  constructor(private router: Router, private data: DataService) {
  }

  ngOnInit(): void {
    this.navLog = false;
    this.data.observableNavLog.subscribe((valeur) => {
      this.navLog = valeur;
    });

    this.data.observableLinkLog.subscribe((valeur) => {
      this.linkLog = valeur;
      this.data.obervableObserveLinkLog.next(valeur);
    });
  }

  link = (link) => {
    this.active = {
      signIn: false,
      create: false
    }
    this.active[link] = true;
    this.router.navigate(['/' + link])
  }

  displayForm = (t) => {
    this.navLog = t;
    this.active = {
      signIn: true,
      create: false
    }
    this.router.navigate(['/signIn'])
  }
}
