import { Component, Input } from '@angular/core';
import { faStar, faStarHalf, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent {
@Input() rating!: number;
faStar= faStar;
faStarHalf= faStarHalf;
faStartHalfStroke= faStarHalfStroke;

get hasDecimal(){

  return  this.rating %1 !=0;
}

get ratingStars(){

  return new Array(Math.floor(this.rating));//if rating is 5 then array create [1,2,3,4,5]
}
}
