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
  
  // subtract 1 from this number as array indices start from 0
  private lastRandomNumber: number = 1;
  // after how many ms does a card change
  private initialTimeToRandom = 2000;
  // maximum gameSpeed -> 2 changes per second
  private minTimeToRandom = 500;
  // timestep to increase the game speed by in ms
  private timeStep = 250;
  // to clear setInterval() calls
  private randomCardIntervalId: any;
  // score works like = baseScore * scoreMultiplier
  // score multiplier according to game speed
  private scoreMultiplier: number = 1;
  private baseScore: number = 10;
  // on incorrect click, points are deducted from the score
  private penaltyScore: number = 20;
  // maxMultiplier achieved in a game session
  private maxMultiplier: number = this.scoreMultiplier;
  // count after which gameSpeed increases
  private gameSpeedIncrementClicks = 3;
  // time game session started at
  private timePlayedAt: string;
  // to toggle game logic
  private isGameRunning: boolean;

  // variables used for binding data
  score: number = 0;
  timerInMs: number = 1000;

  // determines number of cards in game
  cardcount: number = 4;
  cards: Card[] = new Array(this.cardcount).fill({ id: 0, isGreen: false });

  // time after which card colour changes when player
  // doesn't click on it
  timeToRandomInMs: number = this.initialTimeToRandom;

  // to handle scores and gameSpeed
  countSuccessClicks: number = 0;


  constructor(private scoreService: ScoresService, private router: Router) {
    this.initialiseCards();
    let date = new Date();
    this.timePlayedAt = date.toLocaleTimeString() + " " + date.toLocaleDateString();
  }

  //  sets initial values to all cards
  initialiseCards() {
    this.randomCard();
    for (let card = 0; card < this.cards.length; card++) {
      this.cards[card] = { id: card + 1, isGreen: (card == this.lastRandomNumber - 1) ? true : false };
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

  // called after all views are initialised
  ngAfterViewInit() {
    this.isGameRunning = true;
    this.randomWithNewTime();
  }

  private randomWithNewTime() {
    // randomly selects a card
    this.randomiseCards();
    // every timeToRandomInMs milliseconds cards are randomised
    this.randomCardIntervalId = setInterval(() => { this.randomiseCards() }, this.timeToRandomInMs);
  }

  // randomly selects a card and
  // changes old card to white and new card to green
  randomiseCards() {
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
  getWidth(): string {
    let width = '40%';
    if (this.cardcount >= 0 && this.cardcount < 5) {
      width = '40%';
    } else if (this.cardcount > 4 && this.cardcount < 7) {
      width = '60%';
    } else if (this.cardcount > 6 && this.cardcount < 9) {
      width = '80%';
    }
    else {
      width = '100%';
    }
    return width;
  }

  // stops the interval for random cards
  endGame() {
    let scores: Scores = {
      playedAt: this.timePlayedAt,
      maxMultiplier: this.maxMultiplier,
      score: this.score
    };
    this.isGameRunning = false;
    // clear all setInterval calls  
    clearInterval(this.randomCardIntervalId);
    for (let i = 0; i < this.cards.length; i++) {
      let id = i + 1;
      let btn = <HTMLInputElement> document.getElementById("button_" + id);
      btn.disabled = true;
    }
    this.scoreService.postScores(scores).subscribe(() => {
      this.router.navigate(['scores']);
    });
  }

  // used to fetch time from timer component
  // and set it here
  setTimerTime(time: number) {
    this.timerInMs = time;
  }

  getCardClick(isClickedGreen: boolean) {
    console.log("GameSpeed: " + this.timeToRandomInMs / 1000 + " Multiplier: " + this.scoreMultiplier + "x the base score " + this.baseScore);
    if (this.isGameRunning) {
      if (isClickedGreen) {
        this.countSuccessClicks++;
        if (this.countSuccessClicks >= this.gameSpeedIncrementClicks) {
          this.timeToRandomInMs -= this.timeStep;
          if (this.timeToRandomInMs <= this.minTimeToRandom) {
            this.timeToRandomInMs = this.minTimeToRandom;
          }
          this.handleMultiplier();
        }
        clearInterval(this.randomCardIntervalId);
        this.randomWithNewTime();
        this.score += this.baseScore * this.scoreMultiplier;
      }
      else {
        this.resetMultiplier();
        clearInterval(this.randomCardIntervalId);
        this.timeToRandomInMs = this.initialTimeToRandom;
        this.randomWithNewTime();
        this.score -= this.penaltyScore;
        if (this.score <= 0) {
          this.score = 0;
        }
      }
    }else{
      console.log(this.timerInMs/1000);
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
    if (this.scoreMultiplier > this.maxMultiplier) {
      this.maxMultiplier = this.scoreMultiplier;
    }
    // reset click count
    this.countSuccessClicks = 0;
  }


}
