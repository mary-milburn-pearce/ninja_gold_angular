import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninja-gold rocks!';
  pointVals = { 
    farm : {min: 5, max: 10},
    cave : {min: 10, max: 20},
    house : {min: 2, max: 5},
    casino : {min: -50, max: 50}
  }
  textColor: string;
  gold: number = 0;
  activities = [];

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    
  }
  onFindGold(location) {
    let act = "";
    let earned = this.pointVals[location]['min'] + (Math.floor(Math.random() * ((this.pointVals[location]['max']) - this.pointVals[location]['min'])));
    this.gold = this.gold + earned;
    let dt = new Date().toLocaleString();
    if (earned < 0) {
      act = `You lost ${0-earned} golds at the ${location}! (${dt})`
      this.activities.push({ color: 'red', message: act });
    }
    else {
      act = `You earned ${earned} golds at the ${location}! (${dt})`;
      this.activities.push({ color: 'green', message: act });
    }
  }
}
