import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListCheckOffService {
  buyItems ;
  boughItems: any;
  constructor() {

    this.buyItems = [
      { quantity: "2 kg", name: "milk" },
      { quantity: "1kg", name: "nescafe" },
      { quantity: "20 bars", name: "chocolate" },
      { quantity: "1 kg", name: "coffee" },
      { quantity: "10 kg", name: "cookies" }];

    this.boughItems = [];

   }


   getbuyItems () { return this.buyItems; }

   getboughtItems () { return this.boughItems; }

   removeItem (index:number) {
   let removeditem = this.buyItems[index];
   this.buyItems.splice(index, 1);
   this.boughItems.push(removeditem);
 }

   buyMessage (){if(this.buyItems.length>0){return false;} else {return true;}}
   boughtMessage () {if(this.boughItems == 0){return true;}else {return false;}}

}
