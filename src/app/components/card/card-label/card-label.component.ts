import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css']
})
export class CardLabelComponent implements OnInit {

  @Input()
  gameLabel:string =""
  noLabel:boolean = false

  constructor() { }

  ngOnInit(): void {
    this.gameLabel = this.gameLabel.toUpperCase();
    if (this.gameLabel.toLowerCase() === 'none'){
      this.noLabel = true;
    }
  }

}
