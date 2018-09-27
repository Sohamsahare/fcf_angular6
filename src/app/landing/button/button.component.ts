import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input('name') name: string;
  @Input('url') url:string;
  
  
  constructor() { }

  ngOnInit() {
  }

}
