import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit {

  timeInMilliseconds: number;
  private initalTime: number = 1000 * 20;
  private timeInterval : number = 10;
  private timerIntervalId : any;
  private colourIntervalId : any;

  private colours: string[] = ['#FFFF00','#DC3545']

  constructor() {
  }

  ngOnInit() {
    this.startTimer();
  }

  getMinutes() : number{
    return Math.floor(this.timeInMilliseconds / (1000 * 60)) ;    
  }

  getSeconds() : number{
    return Math.floor(((this.timeInMilliseconds % 100000) / 1000)) ;    
  }

  getMiniSeconds() : number{
    return Math.round(((this.timeInMilliseconds % 1000) / (10)) * 100) / 100;   
  }

  startTimer(){
    this.timeInMilliseconds = this.initalTime;
    this.timerIntervalId =  setInterval(() => {
      this.timeInMilliseconds -= this.timeInterval;
      if(this.timeInMilliseconds <= 0 ){
        this.stopTimer();
      }
    },this.timeInterval);
    let colourId = 0;
    this.colourIntervalId = setInterval(() =>{
      let bgColour = document.getElementById('timer-box');
      bgColour.style.backgroundColor = this.colours[colourId] ;
      colourId++;  
    }
    ,(this.initalTime/3));
  }

  stopTimer(){
    clearInterval(this.timerIntervalId);
    clearInterval(this.colourIntervalId);
  }
}
