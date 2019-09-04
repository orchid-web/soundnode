import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { TrackModel } from '../models/track.model';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})

export class StreamComponent implements OnInit {
  track: TrackModel;
  tracks

  constructor(private data: DataService, private http: HttpClient) {
    this.http.get("http://localhost:8083/tracks").subscribe((res: TrackModel) => {
      this.tracks = res;
<<<<<<< HEAD
    })
=======
      })
>>>>>>> master
  }

  ngOnInit() {
  }

}
