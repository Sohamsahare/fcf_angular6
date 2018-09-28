import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ScoresService {
  constructor(private http : HttpClient) { }
  private url: string = 'http://localhost:3000';
  
  getScores(){
    return this.http.get(this.url+'/Scores');
  }
}
