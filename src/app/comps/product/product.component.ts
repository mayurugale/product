import { Component, OnInit } from '@angular/core';
declare function require(url:string);
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  jproduct : any;
  js :any;

  constructor() { }

  ngOnInit() {
    this.jproduct = require('../../json/products.json');
    this.js = this.jproduct.ProductCollection;
    // console.log(this.js);
  }

}
