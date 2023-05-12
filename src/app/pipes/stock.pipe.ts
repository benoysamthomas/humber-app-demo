import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    if(value==0)
    {
         return "Out of Stock";
    } else if(value && typeof value ==='number' && value<10)
    {
        return "Stock Less than 10";
    } else
    {
          return value;
    }
  }

}
