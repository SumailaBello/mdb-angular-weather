import { Component } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Weather';
  route: string;
  // latitude : any = ``;
  // longitude : any = ``;

  constructor() { }

  ngOnInit(){
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.latitude = position.coords.latitude;
    //     this.longitude = position.coords.longitude;
    //     console.log(this.latitude)
    
    //   });
    // }
  }


}
