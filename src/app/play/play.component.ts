import { Component, OnInit } from '@angular/core';
import { Card } from './card/card.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {

  cardcount: number = 4;
  cards: Card[] = new Array(this.cardcount).fill({ id: 0, isGreen: false });
  randomCardIntervalId: any;
  private initialRandomTimeInMs = 2000;
  randomTimeInMs: number = this.initialRandomTimeInMs;

  private lastRandomNumber: number = 1;

  constructor() {
    this.initialiseCards();
  }

  ngOnInit() {
    this.randomCardIntervalId = setInterval(
      () => {
        this.cards[this.lastRandomNumber - 1].isGreen = false;
        let randomId: number = this.randomCard();
        this.cards[randomId - 1].isGreen = true;
      },
      this.randomTimeInMs);
  }

  initialiseCards() {
    for (let card = 0; card < this.cards.length; card++) {
      this.cards[card] = { id: card + 1, isGreen: (card == 0) ? true : false};
      // console.log(this.randomCard(1,this.cardcount,this.lastRandomNumber));
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

}
