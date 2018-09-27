import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timeInMilliseconds: number;
  private timeInterval : number = 10;

  constructor() {
  }

  ngOnInit() {
    this.startTimer();
  }

  startTimer(){
    this.timeInMilliseconds = 1000 * 60;
    setInterval(() => {
      this.timeInMilliseconds -= this.timeInterval;
    },this.timeInterval);
    if(this.timeInMilliseconds <= 0 ){
      return;
    }
  }
}
