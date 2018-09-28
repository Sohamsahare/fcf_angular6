import { Component, OnInit } from '@angular/core';
import { Scores } from './scores.model';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scores : Scores[] = [ 
    { id: 1, playedAt: "12:00 PM", score: 9999 },
    { id: 2, playedAt: "1:00 PM", score: 999 },
    { id: 3, playedAt: "2:00 PM", score: 99 }
  ] ;
  constructor() { }

  ngOnInit() {
  }

}
