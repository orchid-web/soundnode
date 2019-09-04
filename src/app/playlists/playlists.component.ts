import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';


@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor(private http: HttpClient, private data: DataService) {
    this.data.observableNavLog.next(false);
  }

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