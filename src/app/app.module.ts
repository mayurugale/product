import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './comps/product/product.component';
import {MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule} from '@angular/material';
import { CardComponent } from './comps/card/card.component';
import { BillComponent } from './comps/bill/bill.component';
import { DefaultComponent } from './comps/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CardComponent,
    BillComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
