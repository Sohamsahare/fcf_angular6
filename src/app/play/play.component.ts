import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Card } from './card/card.model';
import { ScoreCardService } from '../../services/scorecard.service';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements AfterViewInit {
  
  // variables used for binding data
  score: number = 0;
  cards: Card[] ;
  private gameTimeId : any;
  private initialTime : number;
  constructor(private scoreService: ScoreCardService, private router: Router, private gameService: GameService) {
    this.cards = gameService.initialiseCards();
  }

  // called after all views are initialised
  ngAfterViewInit() {
    this.gameService.startGame();
  }

  setInitialTime(initialTime:number){
    this.initialTime = initialTime;
    
    this.gameTimeId = setTimeout(() => { this.onEndGame();  }, initialTime);
  }

  // stops the interval for random cards
  onEndGame() {
    let scores = this.gameService.endGame();
    console.log("posting to scores");
    this.scoreService.postScores(scores).subscribe(() => {
      console.log("posted to scores");
      this.router.navigate(['scores']);
    });
  }

  // used to fetch time from timer component
  // and set it here
  setTimerTime(time: number) {
    this.gameService.timerInMs = time;
  }

  getCardClick(isClickedGreen: boolean) {
    this.score =  this.gameService.getCardClick(isClickedGreen);
  }
}
