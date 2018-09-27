import { Component, OnInit } from '@angular/core';
import { ButtonRoute } from './buttonroute.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  routes : ButtonRoute[] = [
    { text: 'PLAY', url: '/play' },
    { text: 'SCORES', url: '/scores' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
