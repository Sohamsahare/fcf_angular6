import { Component, OnInit } from '@angular/core';
import { Scores } from './scores.model';
import { ScoreCardService } from '../../services/scorecard.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scores : Scores[] ;
  constructor(private ScoreCardService : ScoreCardService) { }

  ngOnInit() {
    this.ScoreCardService.getScores().subscribe((scoresDb : Scores[]) => {
      this.scores = scoresDb;
    })
  }

}
