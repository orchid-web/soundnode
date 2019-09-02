import { Component, OnInit, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faSearch = faSearch;
  faCog = faCog;
  trackSearch: String;


  constructor() { }

  ngOnInit() {
  }
  
  Search = () => {
    alert(this.trackSearch);
  }
}

