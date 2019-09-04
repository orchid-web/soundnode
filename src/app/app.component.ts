import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { TrackModel } from './models/track.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  active = {};
  navLog: Boolean;//Menu login create
  linkLog: Boolean;// Lien log in log out
  tracks : Array<TrackModel> = [
    {
      idTrack : "1",
      titleTrack:'titre test',
      phototrack :'',
      artiste : 'artiste',
      duree : '',
      nbLikes : 'artiste',
      resume : '',
      url :"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    }
  ]
  trackTest : TrackModel = this.tracks[1];

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

  nextTrack = (track) => {
    let index = this.tracks.indexOf(track);
    if(index < this.tracks.length-1)
    this.trackTest = this.tracks[index+1]
  }

  previousTrack = (track) => {
    let index = this.tracks.indexOf(track);
    if(index > 0)
    this.trackTest = this.tracks[index-1]
  }
}
