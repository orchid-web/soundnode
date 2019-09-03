import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  constructor(private http: HttpClient ) { }

  ngOnInit() {
  }
  // findPlaylists = () => {
  //   this.orderdata.getApi('stream/' + this.thisCustomer).subscribe((res: any) => {
  //     if (res.error) {
  //       this.noPlaylists = true;

  //     }
  //     else {
  //       this.playlists = res.playlists;
  //     }
  //   });
  // }
}