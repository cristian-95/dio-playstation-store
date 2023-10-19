import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

  @Input()
  gameCondition:string = "";
  @Input()
  cardText:string = "";
  @Input()
  gameValue:string = "";
  @Input()
  console:string = "";

  constructor() { }

  ngOnInit(): void {
    this.gameCondition = this.gameCondition.toUpperCase();
    this.console = this.console.toUpperCase();
  }

}
