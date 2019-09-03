import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() customer
  customerLikes
  noLikes = false
  thisCustomer
  constructor(private http: HttpClient ) { }

  

  ngOnInit() {
    this.thisCustomer = this.customer.id
    console.log(this.thisCustomer);
  }

}
