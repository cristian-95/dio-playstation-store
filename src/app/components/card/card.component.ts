import { Component, OnInit, Input } from '@angular/core';
import { games } from '../../data/db';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  id:string="0";
  @Input()
  gameTitle:string = "";
  @Input()
  imgUrl:string = "";
  @Input()
  label:string = "";
  @Input()
  cardText:string = "";
  @Input()
  gameCondition:string = "";
  @Input()
  console:string = "";
  @Input()
  gameValue:string = "";

  constructor() { }

  ngOnInit(): void {
    this.getGameData(this.id);
  }

  getGameData(id:string){
    const result = games.filter(game => game.id == id)[0];
    this.gameTitle = result.gameTitle;
    this.imgUrl = result.imgUrl;
    this.label = result.label;
    this.cardText = result.cardText;
    this.gameCondition = result.gameCondition;
    this.console = result.console;
    this.gameValue = result.gameValue;
  }

}
