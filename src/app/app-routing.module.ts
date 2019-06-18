import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './comps/product/product.component';
import { DefaultComponent } from './comps/default/default.component';
import { CardComponent } from './comps/card/card.component';
import { BillComponent } from './comps/bill/bill.component';

const routes: Routes = 
[
 { 
   path: '', component: DefaultComponent, children: 
   [
    {path:"product",component:ProductComponent},
    {path:"card",component:CardComponent},
    {path:"card/:title",component:CardComponent},
    {path:"bill",component:BillComponent}
   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
