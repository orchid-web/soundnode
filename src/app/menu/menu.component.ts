import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  faCloud = faCloud;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faHeart = faHeart;
  faBookmark = faBookmark;
  faUserCircle = faUserCircle;
  linkLog:Boolean;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    this.data.observableLinkLog.subscribe((valeur)=> {
      this.linkLog = valeur;
    })
  }

  logIn = () => {
    alert('connexion');
    this.data.observableLog.next(true);
    // this.linkLog = true;
    this.router.navigate(['/signIn']);
  }

  logOut = () => {
    alert('Deconnexion');
    // this.linkLog = false;
    
    this.router.navigate(['/']);
    this.data.postApi('logOut',{}).subscribe((res: any) => {
      if(res.allowd) {
        alert('erreur de deconnexion');
      } else {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        this.data.observableLinkLog.next(false);
      }
    })
  }
}
