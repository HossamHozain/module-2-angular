import { Component } from '@angular/core';
import {ShoppingListCheckOffService} from'src/app/shopping-list-check-off.service'
@Component({
  selector: 'app-to-buy',
  templateUrl: './to-buy.component.html',
  styleUrls: ['./to-buy.component.css']
})
export class ToBuyComponent {
  constructor(ShoppingListCheckOffService:ShoppingListCheckOffService){
    
  }

}
