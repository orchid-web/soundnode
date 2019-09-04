import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TrackModel } from '../models/track.model';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  faStepBackward = faStepBackward;
  faStepForward = faStepForward;
  faVolumeUp = faVolumeUp;
  faPlay = faPlay;
  faPause = faPause;
  @Input() track: TrackModel;
  audio;
  duration = 0;
  elapsed = 0;
  position = 0;
  paused = false;
  volumeWidth;
  @Output() nextEmiter = new EventEmitter<any>();
  @Output() previousEmiter = new EventEmitter<any>();
  @ViewChild('volumeRef', {static: false, read: ElementRef}) volumeRef : ElementRef
  constructor() { 
    this.audio = new Audio();
  }

  ngOnInit() {
    
    this.audio.src = this.track.url;
    this.volumeWidth = 0;
    
    this.audio.ontimeupdate = (e) => {
      this.duration = this.audio.duration;
      this.elapsed = this.audio.currentTime;
      this.position = (this.elapsed / this.duration) * 100;
    }
  }

  play = () => {
    this.audio.play();
    this.paused = true;
  }

  pause = () => {
    this.audio.pause();
    this.paused = false;
  }

  changePosition(position)  {
    this.position = position * 100;
    this.audio.currentTime = position * this.duration;
  }

  next = ()=> {
    this.nextEmiter.emit(this.track);
    this.audio.load();
    this.play();
  }
  previous = () => {
    this.previousEmiter.emit(this.track);
    this.audio.load();
    this.play();
  }
  changeVolume = (e) => {
   this.volumeWidth = (e.pageX-this.volumeRef.nativeElement.offsetParent.offsetParent.offsetLeft)/this.volumeRef.nativeElement.offsetParent.offsetParent.offsetWidth * 100;
   this.audio.volume = (e.pageX-this.volumeRef.nativeElement.offsetParent.offsetParent.offsetLeft)/this.volumeRef.nativeElement.offsetParent.offsetParent.offsetWidth;
  }
}