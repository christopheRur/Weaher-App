import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   console.log(this.getRandomColor());
  }

  public getRandomColor():any{

    const allColors = ["#FF0000",  "#0000FF",
    "#008000",
    "#FFFF00", ]

    const randomIndex= Math.floor(Math.random()*allColors.length);

    return allColors[randomIndex];
  }

}
