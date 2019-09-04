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


  constructor(private data: DataService, private http: HttpClient) { }


  ngOnInit() {

  }

  addLike = () => {
    let test = ({userId:1, idTrack:1});
    this.data.postApi('likes', test).subscribe((res: any) => {
      if (res.error) {
        alert("Error insertion");
      }
      else {
        alert("like ajouté")
      }
    })

    //let nbLikes=0;
    // alert(this.track.idTrack);
    // nbLikes = this.track.nbLikes;
    // nbLikes ++;
    //pousser nbLikes sur server tracks.json
    //pousser l'Id track dans like.json avec comme id l'id User dans likes.json
    //alert (nbLikes);
  }

  addPlaylist = () => {
    alert(this.track.idTrack)
  }
}

