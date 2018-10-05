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
  cards: Card[];
  hasGameStarted: boolean = false;
  gameTime: number;
  cardCount: number;

  constructor(private scoreService: ScoreCardService, private router: Router, private gameService: GameService) {
    this.cards = this.gameService.initialiseCards();
  }

  // called after all views are initialised
  ngAfterViewInit() {
  }

  play() {
    let time = this.gameTime * 60 * 1000;
    this.gameService.timerInMs = time;
    // this.gameService.cardcount = (this.cardCount > 3) ? this.cardCount : 4;
    this.gameService.startGame();
    setTimeout(() => { this.onEndGame(); }, time);
    this.hasGameStarted = true;
  }

  // stops the interval for random cards
  onEndGame() {
    let scores = this.gameService.endGame();
    this.scoreService.postScores(scores).subscribe(() => {
      this.router.navigate(['scores']);
    });
  }

  // used to fetch time from timer component
  // and set it here
  setTimerTime(time: number) {
    this.gameService.timerInMs = time;
  }

  getCardClick(isClickedGreen: boolean) {
    this.score = this.gameService.getCardClick(isClickedGreen);
  }
}
