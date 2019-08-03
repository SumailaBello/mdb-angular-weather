import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AppComponent} from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  forecastInfo: object;
  weeklyInfo: any;
  date: any;
  weekday: any = new Array(7);
  today:any;
  nextDay1:any;
  nextDay2:any; 
  nextDay3:any; 
  nextDay4:any; 
  nextDay5:any; 
  nextDay6:any; 

  constructor(private data: DataService, private router: Router, private app: AppComponent) { }

  ngOnInit() {

    // the below triggers the location method from the data service file, gets the location data and sets it to this.coord
    this.data.location()

    // checking the url from the router module
    if(this.router.url == "/"){
      console.log("homepage")

      // removing the active class from the navbar about link on the app component imported here
      document.getElementById("about").classList.remove("active");
      
    }

    // assigning values to the weekday array
    this.weekday[0] = "Sunday";
    this.weekday[1] = "Monday";
    this.weekday[2] = "Tuesday";
    this.weekday[3] = "Wednesday";
    this.weekday[4] = "Thursday";
    this.weekday[5] = "Friday";
    this.weekday[6] = "Saturday";

    // the below had to be added because when the value for nextday gets higher than 6 it started to return an undefined value and the slice method caused an error (from line 79 and below)
    this.weekday[7] = "Sunday";
    this.weekday[8] = "Monday";
    this.weekday[9] = "Tuesday";
    this.weekday[10] = "Wednesday";
    this.weekday[11] = "Thursday";
    this.weekday[12] = "Friday";

    // gets forecast and weekly forecast data after a timeout delay so that the location data from geolocation will be available

    setTimeout(()=>{
    this.data.getForecastInfo().subscribe(data =>{
      this.forecastInfo = data;
      // console.log(this.forecastInfo);
      
    })

    // gets weekly forecast info
    this.data.getweeklyInfo().subscribe(data =>{
      // console.log( data);
  
      // if(data.forecast){
        // console.log(data.forecast.forecastday[1].date)
      
      this.weeklyInfo = data;
    
      // the below sets date with the date gotten from the api
      this.date = new Date(this.weeklyInfo.forecast.forecastday[0].date);

      // the below gets value of today by getting value for day which is given in number from 0-6 and matching it with the weekday array already set above
      this.today = this.weekday[this.date.getDay()];
      // console.log(this.date.getDay()+ 1);

      // the below calculates the days after the current day
      this.nextDay1 = this.weekday[this.date.getDay() + 1].slice(0,3) + ": " + this.weeklyInfo.forecast.forecastday[1].day.avgtemp_c +("°C"); 
      this.nextDay2 = this.weekday[this.date.getDay() + 2].slice(0,3) + ": " + data.forecast.forecastday[2].day.avgtemp_c +("°C");
      this.nextDay3 = this.weekday[this.date.getDay() + 3].slice(0,3) + ": " + data.forecast.forecastday[3].day.avgtemp_c +("°C");
      this.nextDay4 = this.weekday[this.date.getDay() + 4].slice(0,3) + ": " + data.forecast.forecastday[4].day.avgtemp_c +("°C");
      this.nextDay5 = this.weekday[this.date.getDay() + 5].slice(0,3) + ": " + data.forecast.forecastday[5].day.avgtemp_c +("°C");
      this.nextDay6 = this.weekday[this.date.getDay() + 6].slice(0,3) + ": " + data.forecast.forecastday[6].day.avgtemp_c +("°C");

      // console.log(this.weeklyInfo);
      // console.log(this.today);
      // console.log(this.nextDay1);
    // }
    })


  }, 1000)
  }

  // contains the same code as the method above which is run on refresh button click
  refresh(){
    // gets forecast info
    this.data.getForecastInfo().subscribe(data =>{
      this.forecastInfo = data;
      // console.log(this.forecastInfo)
    })

    // gets weekly forecast info
     this.data.getweeklyInfo().subscribe(data =>{
     
      if(data){
        // console.log(data.forecast.forecastday[1].date)
      
      this.weeklyInfo = data;
      this.date = new Date(data.forecast.forecastday[0].date);
      this.today = this.weekday[this.date.getDay()];
      this.nextDay1 = this.weekday[this.date.getDay() + 1].slice(0,3) + ": " + data.forecast.forecastday[1].day.avgtemp_c +("°C");
      this.nextDay2 = this.weekday[this.date.getDay() + 2].slice(0,3) + ": " + data.forecast.forecastday[2].day.avgtemp_c +("°C");
      this.nextDay3 = this.weekday[this.date.getDay() + 3].slice(0,3) + ": " + data.forecast.forecastday[3].day.avgtemp_c +("°C");
      this.nextDay4 = this.weekday[this.date.getDay() + 4].slice(0,3) + ": " + data.forecast.forecastday[4].day.avgtemp_c +("°C");
      this.nextDay5 = this.weekday[this.date.getDay() + 5].slice(0,3) + ": " + data.forecast.forecastday[5].day.avgtemp_c +("°C");
      this.nextDay6 = this.weekday[this.date.getDay() + 6].slice(0,3) + ": " + data.forecast.forecastday[6].day.avgtemp_c +("°C");

      }
    })

  }

}
