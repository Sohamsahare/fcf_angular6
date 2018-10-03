import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // reference to model class
  @Input() card : Card;

  // let parent know it was clicked
  @Output() clickEventEmitter = new EventEmitter();

  onClick(){
    if(this.card.isGreen){
      this.clickEventEmitter.emit(true);
    }
    else{
      this.clickEventEmitter.emit(false);
    }
  }
}
