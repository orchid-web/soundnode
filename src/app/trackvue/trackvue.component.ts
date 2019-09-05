import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';


@Component({
  selector: 'app-trackvue',
  templateUrl: './trackvue.component.html',
  styleUrls: ['./trackvue.component.css']
})

export class TrackvueComponent implements OnInit {
  @Input() track;
  faHeart = faHeart;
  faBookmark = faBookmark;
  

  constructor(private data: DataService, private http: HttpClient) {}


  ngOnInit() {

  }

  addLike = () => {
     this.data.postApi('likesplus',{id : this.track.idTrack}).subscribe((res:any)=>{
       let changeHeathColor = res;
        
       
    })
  }

  addPlaylist = () => {
    alert(this.track.idTrack)
  }
}

