import { Injectable } from '@angular/core';
import { cardData } from '../components/card/card.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private cardData = cardData
  constructor() { }

  getCardData(){
    return this.cardData;
  }
}
