import { Component, OnInit, Input } from '@angular/core';
import { Categories } from '../shared/interfaces/categories';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: [ './product-item.component.css' ]
})
export class ProductItemComponent implements OnInit {
  @Input() item: Categories = { id: 1, type: '', image:'', items: 1};
  path = this.item.image;

  constructor() { }

  ngOnInit(): void {
  }
}
