import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricingComponent } from "./card-pricing/card-pricing.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
[x: string]: any;

  @Input()
  gameCover:string=""
  @Input()
  gameLabel:string=""
  @Input()
  gameType:string=""
  @Input()
  gamePrice:string=""
  
  constructor(){}

  ngOnInit(): void {
      
  }


}
