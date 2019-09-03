import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
// like = [] ;
  constructor(private data:DataService, private router:Router) { }

  ngOnInit() {
    
  }
// addLike =() =>{
//   this.data.postApi('likes', this.track.value).subscribe((res:any)=> {
//     if(for ){
    
//     }
//   })

// }
 }
