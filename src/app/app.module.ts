import { ShoppingListCheckOffService } from './shopping-list-check-off.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToBuyComponent } from './to-buy/to-buy.component';
import { BroughtComponent } from './brought/brought.component';

@NgModule({
  declarations: [
    AppComponent,
    ToBuyComponent,
    BroughtComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [ShoppingListCheckOffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
