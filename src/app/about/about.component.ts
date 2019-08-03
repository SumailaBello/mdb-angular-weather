import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent} from '../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router, private app: AppComponent) { }

  ngOnInit() {

    // checking the link from the router module
    if(this.router.url == "/about"){
      console.log("aboutpage")
      // this.activeStyle = false;
      // the below triggers the location method from the data service file, gets the location data and sets it to this.coord
      document.getElementById("about").classList.add("active");
      
    }
  }

}
