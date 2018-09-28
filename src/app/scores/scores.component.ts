import { Component, OnInit } from '@angular/core';
import { Scores } from './scores.model';
import { ScoresService } from '../../services/scores.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scores : Scores[] ;
  constructor(private scoresService : ScoresService) { }

  ngOnInit() {
    this.scoresService.getScores().subscribe((scoresDb : Scores[]) => {
      this.scores = scoresDb;
    })
  }

}
