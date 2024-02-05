import { Component, OnInit } from '@angular/core';
import { Categories } from '../shared/interfaces/categories';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent implements OnInit {
  products: Categories[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductCategories();
  }

  getProductCategories(): void {
    this.productService.getProductCategories().subscribe(categories => this.products = categories);
  }

  addCategory(): void {
    console.log("Add Category button clicked")
  }
}
