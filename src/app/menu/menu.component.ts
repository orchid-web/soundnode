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
  linkLog = false;// Affiche login
  @Output() log:EventEmitter<Boolean> = new EventEmitter();

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
  }

  logIn = () => {
    alert('connexion');
    this.linkLog = true;
    this.log.emit(this.linkLog);
  }

  logOut = () => {
    alert('Deconnexion');
    this.linkLog = false;
    this.log.emit(this.linkLog);
    this.router.navigate(['/']);
    this.data.postApi('logOut',{}).subscribe((res: any) => {
      if(res.allowd) {
        alert('erreur de deconnexion');
      }
    })
  }
}
