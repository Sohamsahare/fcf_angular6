import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Card } from './card/card.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements AfterViewInit {
  // subtract 1 from this number to change
  private lastRandomNumber: number = 1;
  private initialTimeToRandom = 2000;
  private randomCardIntervalId: any;

  // variables used for binding data
  score : number = 0;
  timerInMs : number = 0;

  // determines number of cards in game
  cardcount: number = 4;
  cards: Card[] = new Array(this.cardcount).fill({ id: 0, isGreen: false });

  // time after which card colour changes when player
  // doesn't click on it
  timeToRandomInMs: number = this.initialTimeToRandom;

  constructor() {
    this.initialiseCards();
  }

  // called after all views are initialised
  ngAfterViewInit() {
    // randomly selects a card
    this.randomiseCards();
    // every timeToRandomInMs milliseconds cards are randomised
    this.randomCardIntervalId = setInterval(
      () => {
        this.randomiseCards();
      },
      this.timeToRandomInMs);
  }

  // randomly selects a card and
  // changes old card to white and new card to green
  randomiseCards(){
    let elem = document.getElementById("play");
    elem.style.width = this.getWidth();
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

  // Changes width property so that cards appear as a grid
  // TODO: fix this. 
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

  //  sets initial values to all cards
  initialiseCards() {
    this.randomCard();
    for (let card = 0; card < this.cards.length; card++) {
      this.cards[card] = { id: card + 1, isGreen: (card == this.lastRandomNumber - 1) ? true : false};
    }
  }

  //randomly selects a card from the pool
  randomCard() {
    let randomNumber: number = Math.floor(Math.random() * (this.cardcount) + 1);
    while (randomNumber == this.lastRandomNumber) {
      randomNumber = Math.floor(Math.random() * (this.cardcount) + 1);
    }
    this.lastRandomNumber = randomNumber;
    return randomNumber;
  }

  // stops the interval for random cards
  endGame(){
    clearInterval(this.randomCardIntervalId);
  }

  // used to fetch time from timer component
  // and set it here
  setTimerTime(time : number){
    this.timerInMs = time;
  }

  getCardClick(isClickedGreen : boolean){
    console.log(isClickedGreen);
  }

  handleScore(){

  }
}
