import { Component, OnInit } from '@angular/core';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'
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

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
