import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Card } from './card/card.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements AfterViewInit {
  // subtract 1 from this number to change
  private lastRandomNumber: number = 1;
  private initialTimeToRandom = 2000;
  
  timerInMs : number = 0;
  cardcount: number = 4;
  cards: Card[] = new Array(this.cardcount).fill({ id: 0, isGreen: false });
  randomCardIntervalId: any;
  timeToRandomInMs: number = this.initialTimeToRandom;

  constructor() {
    this.initialiseCards();
  }

  ngAfterViewInit() {
    this.randomiseCards();
    this.randomCardIntervalId = setInterval(
      () => {
        this.randomiseCards();
      },
      this.timeToRandomInMs);
  }

  randomiseCards(){
    let elem = document.getElementById("play");
    elem.style.width = this.getWidth();
    console.log(this.getWidth());
    if (this.timerInMs <= 100) {
      this.endGame();
    }
    this.cards[this.lastRandomNumber - 1].isGreen = false;
    elem = document.getElementById("card_" + this.cards[this.lastRandomNumber - 1].id);
    elem.style.backgroundColor = 'white';
    let randomId: number = this.randomCard();
    this.cards[randomId - 1].isGreen = true;
    elem = document.getElementById("card_" + this.cards[randomId - 1].id);
    elem.style.backgroundColor = 'green';
  }

  getWidth() : string{
    let width = '40%';
    if (this.cardcount >= 0 && this.cardcount < 5) {
      width = '40%';
    }else if(this.cardcount > 4 && this.cardcount < 7){
      width = '60%';
    }else if (this.cardcount > 6 && this.cardcount < 9) {
      width = '80%';
    }
    else{
      width = '100%';
    }
    return width;
  }

  initialiseCards() {
    this.randomCard();
    for (let card = 0; card < this.cards.length; card++) {
      this.cards[card] = { id: card + 1, isGreen: (card == this.lastRandomNumber - 1) ? true : false};
    }
  }

  randomCard() {
    let randomNumber: number = Math.floor(Math.random() * (this.cardcount) + 1);
    while (randomNumber == this.lastRandomNumber) {
      randomNumber = Math.floor(Math.random() * (this.cardcount) + 1);
    }
    this.lastRandomNumber = randomNumber;
    return randomNumber;
  }

  endGame(){
    clearInterval(this.randomCardIntervalId);
  }

  setTimerTime(time : number){
    this.timerInMs = time;
  }

}
