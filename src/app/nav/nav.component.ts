import { Component, OnInit } from '@angular/core';
import { navigation } from "../shared/metadata";
import {Navigation} from "../shared/interfaces/navigation";
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.css' ]
})
export class NavComponent implements OnInit {
  navItems: Array<Navigation> = [{type: '', list: []}];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.navItems = navigation;
  }
}
