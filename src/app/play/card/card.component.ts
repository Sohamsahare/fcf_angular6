import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentChecked } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterContentChecked {
  @Input() card : Card;

  constructor() { }

  ngOnInit() {
    // this.toChangeColor();
    // console.log(this.card.id);
  }
  
  // ngAfterContentChecked(){
  //   this.toChangeColor();
  // }

  ngAfterViewInit() {
    let elem = document.getElementById("card_" + this.card.id);
    elem.style.backgroundColor = (this.card.isGreen)?'green':'white';
    // console.log("elem", elem);
  }

  toChangeColor(){
    let elem = document.getElementById("card_"+ this.card.id);
    console.log("elem", elem);
  }

}
