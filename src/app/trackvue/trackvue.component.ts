import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { TrackModel } from '../models/track.model';

@Component({
  selector: 'app-trackvue',
  templateUrl: './trackvue.component.html',
  styleUrls: ['./trackvue.component.css']
})

export class TrackvueComponent implements OnInit {
  @Input() track;
  faHeart = faHeart;
  faBookmark = faBookmark;


  constructor(private data: DataService, private http: HttpClient) {
    console.log(this.track);
  }


  ngOnInit() {

  }

  addLike = () => {
    alert('ajoute à mes Like')
  }

  addPlaylist = () => {
    alert('ajoute à la PlayList')
  }
}

