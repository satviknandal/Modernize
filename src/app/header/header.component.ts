import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  searchText: string = "";
  
  ngOnInit(): void {}


  handleSearch(): void {
    console.log("Handle Search")
  }
}
