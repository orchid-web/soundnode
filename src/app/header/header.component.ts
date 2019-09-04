import { Component, OnInit, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faCog = faCog;
  trackSearch: String;

  constructor(private data:DataService) { }

  ngOnInit() {
  }
  
  Search = () => {
    alert(this.trackSearch);
    this.data.observableSearch.next(this.trackSearch);
    // this.testProduits = this.testProduits.filter(p=> p.includes(this.search))

  }
}

