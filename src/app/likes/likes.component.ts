import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { TrackModel } from '../models/track.model';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
 track: TrackModel;

  constructor(private data: DataService, private router: Router, private http: HttpClient) {
    this.data.observableNavLog.next(false);
    // this.http.get("http://localhost:8083/tracks").subscribe((res: TrackModel) => {
    //   this.tracks = res;
  }

  ngOnInit() {
  }
  
}
