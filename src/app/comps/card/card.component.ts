import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
declare function require(url:string);

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() Product;
  products: any[] = [];
  jproduct:any;
  js:any;
  id :any;
  tprice: number
  

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('title');
    this.jproduct = require('../../json/products.json');
    this.js = this.jproduct.ProductCollection[0];
    console.log(this.js);
     
  }
  minus() {
    if (this.js.Quantity > 0) {
      this.js.Quantity = this.js.Quantity - 1;
      const i = this.js.Quantity
      const j = this.js.Price
      this.tprice=i*j;
      console.log(this.tprice)

    }
  }
  plus() {
    if (this.js.Quantity < 100) {
      this.js.Quantity = this.js.Quantity + 1;
      const i = this.js.Quantity
      const j = this.js.Price
      this.tprice=i*j;
      console.log(this.tprice)     
    }
  }
  

}
