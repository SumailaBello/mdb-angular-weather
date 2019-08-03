import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  latitude : any;
  longitude : any;
  coord: string = "Nigeria";
  // params: object;

  apiEndpoint: any = `https://api.darksky.net/forecast/0b63745c81977e88f4c59248a827d507`;
  apiEndpoint1: any = "https://api.apixu.com/v1/forecast.json?key=9dc2470ca14b48dc90204428192907&q=";
  // apiEndpoint2: any;

  constructor(private http: HttpClient) {}


  location(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.coord = this.latitude + "," + this.longitude;
        this.coord.toString();
        // console.log(this.latitude)
        // console.log(this.longitude)
        // this.apiEndpoint1 = "https://api.apixu.com/v1/forecast.json?key=9dc2470ca14b48dc90204428192907&";

        // console.log("endpoint:" + this.apiEndpoint1 + this.coord);
       
      });

    }

  }

  getForecastInfo(){
    
    if(this.coord == "Nigeria"){
      alert("Location set to default value. Enable location access and click the refresh button for accurate results")
    }

      var params = {
        q: this.coord
      }
      // console.log(this.coord)
      

      return this.http.get<any>(`https://api.apixu.com/v1/forecast.json?key=9dc2470ca14b48dc90204428192907`, {params});

  }

  getweeklyInfo(){

          // the below can be used to cast the property value of response in a request into specific types

    // interface WeatherResponse {
    //   forecast: object;
    //   forecastday: Array<any>;
    //   company: string;
    // }

    var params = {
      q: this.coord,
      days: "7"
    }
    return this.http.get<any>(`https://api.apixu.com/v1/forecast.json?key=9dc2470ca14b48dc90204428192907`, {params})
  }

}
