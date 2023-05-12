import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
banner={
heading:"Spring Season is back!!!",
subheading:"And so is our offers too then why waiting",
cta:"checkout all our products",
url:"https://www.amazon.ca",
}
comments="";
handleClick(){
  console.log("clicked the button")
}
}
