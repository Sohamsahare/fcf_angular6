import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scores } from '../app/scores/scores.model';

@Injectable({
  providedIn: 'root'
})

export class ScoresService {
  private url: string = 'http://localhost:3000';
  constructor(private http : HttpClient) { }
  
  getScores(){
    return this.http.get(this.url+'/scores');
  }

  postScores(score:Scores){
    return this.http.post(this.url+'/scores',score);
  }
}
