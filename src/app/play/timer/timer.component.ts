import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit {
  // used to pass time remaining from timer to
  // parent class
  @Output() time = new EventEmitter();
  // initialises timer to this amount of time in ms
  timeInMilliseconds: number;
  private initalTime: number = 1000 * 60;
  // how fast to update the time in the timer in ms
  private timeInterval : number = 10;
  // used to clear setInterval calls
  private timerIntervalId : any;
  private colourIntervalId : any;

  // timer colour changes from green to these colours every 1/3rd initialTime
  private colours: string[] = ['#FFFF00','#DC3545'];

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
      this.emitTimer()
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

  emitTimer(){
    this.time.emit(this.timeInMilliseconds);
  }

  stopTimer(){
    clearInterval(this.timerIntervalId);
    clearInterval(this.colourIntervalId);
  }
}
