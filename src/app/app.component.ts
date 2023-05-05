import { Component } from '@angular/core';
import { cardData } from './components/card/card.data';
import { Card } from './model/card.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'humber-app-demo';
  cards: Card[]=cardData;
  //isSelected= false;
  currentSelectedCard !:Card;

  handleCardSelect(card: Card){
   // this.isSelected=true;
    this.currentSelectedCard= card;

    console.log("handle data from parent::",card);
  }
}
