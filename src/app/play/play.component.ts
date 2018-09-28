import { Component, OnInit } from '@angular/core';
import { Card } from './card/card.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {

  cardcount : number = 4;
  cards: Card[] = new Array(this.cardcount).fill({id:0 ,isGreen:false});

  constructor() {
    this.initialiseCards();
    console.log(this.cards[1].id);
  }
  
  ngOnInit() {

  }

  initialiseCards(){
    for (let card = 0; card < this.cards.length; card++) {
      this.cards[card] = { id: card+1, isGreen:false};
    }
  }

}
