import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Card } from './card/card.model';
import { ScoresService } from '../../services/scores.service';
import { Scores } from '../scores/scores.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements AfterViewInit {
  // subtract 1 from this number to change
  private lastRandomNumber: number = 1;
  // after how many ms does a card change
  private initialTimeToRandom = 2000;
  // maximum gameSpeed
  private minTimeToRandom = 500;
  private timeStep = 250;
  // to clear setInterval() calls
  private randomCardIntervalId: any;
  // score multiplier according to game speed
  private scoreMultiplier : number = 1;
  private maxMultiplier : number = this.scoreMultiplier;
  private baseScore: number = 10;
  private penaltyScore : number = 20;
  // count after which gameSpeed increases
  private gameSpeedIncrementClicks = 3;
  // time game session started at
  private timePlayedAt : string;

  // variables used for binding data
  score : number = 0;
  timerInMs : number = 1000;

  // determines number of cards in game
  cardcount: number = 4;
  cards: Card[] = new Array(this.cardcount).fill({ id: 0, isGreen: false });

  // time after which card colour changes when player
  // doesn't click on it
  timeToRandomInMs: number = this.initialTimeToRandom;

  // to handle scores and gameSpeed
  countSuccessClicks : number = 0;


  constructor(private scoreService : ScoresService, private router : Router) {
    this.initialiseCards();
    let date = new Date();
    this.timePlayedAt = date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }

  // called after all views are initialised
  ngAfterViewInit() {
    this.randomWithNewTime();
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
    let scores : Scores = {
      playedAt:this.timePlayedAt,
      maxMultiplier:this.maxMultiplier,
      score:this.score
    };
    clearInterval(this.randomCardIntervalId);
    this.scoreService.postScores(scores).subscribe(() => {
      // this.router.navigate['scores'];
    });
  }

  // used to fetch time from timer component
  // and set it here
  setTimerTime(time : number){
    this.timerInMs = time;
  }

  getCardClick(isClickedGreen : boolean){
    console.log("GameSpeed: "+this.timeToRandomInMs+" Multiplier: "+this.scoreMultiplier);
    if(isClickedGreen){
      this.countSuccessClicks++;
      if(this.countSuccessClicks >= this.gameSpeedIncrementClicks){
        this.timeToRandomInMs -= this.timeStep;
        if(this.timeToRandomInMs <=  this.minTimeToRandom){
          this.timeToRandomInMs = this.minTimeToRandom;
        }
        this.handleMultiplier();
      }
      clearInterval(this.randomCardIntervalId);
      this.randomWithNewTime();
      this.score += this.baseScore * this.scoreMultiplier;
    }
    else{
      this.resetMultiplier();
      clearInterval(this.randomCardIntervalId);
      this.timeToRandomInMs = this.initialTimeToRandom;
      this.randomWithNewTime();
      this.score -= this.penaltyScore;
      if(this.score<=0){
        this.score = 0;
      }
    }
  }

  private resetMultiplier() {
    this.countSuccessClicks = 0;
    this.scoreMultiplier = 1;
  }

  private handleMultiplier() {
    // increases multiplier
    this.scoreMultiplier++;
    // replaces maxMultiplier 
    if(this.scoreMultiplier > this.maxMultiplier){
      this.maxMultiplier = this.scoreMultiplier;
    }
    // reset click count
    this.countSuccessClicks = 0;
  }

  private randomWithNewTime() {
    // randomly selects a card
    this.randomiseCards();
    // every timeToRandomInMs milliseconds cards are randomised
    this.randomCardIntervalId = setInterval(() => { this.randomiseCards() }, this.timeToRandomInMs);
  }
}
