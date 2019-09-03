import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  @Input() customer
  customerPlaylists
  noPlaylists = false
  thisCustomer
  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.thisCustomer = this.customer.id
    console.log(this.thisCustomer);
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