import { Component, OnInit } from '@angular/core';
import { cardData } from './components/card/card.data';
import { Card } from './model/card.model';
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'humber-app-demo';
  cards: Card[]=[];
  //isSelected= false;
  currentSelectedCard !:Card;
 constructor(private productService: ProductService){

 }
 ngOnInit(): void {
   this.cards= this.productService.getCardData();

 }
  handleCardSelect(card: Card){
   // this.isSelected=true;
    this.currentSelectedCard= card;

    console.log("handle data from parent::",card);
  }
}
