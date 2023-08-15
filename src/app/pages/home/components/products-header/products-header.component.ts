import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
  
})
export class ProductsHeaderComponent implements OnInit {
  sort= 'desc';
  itemsShowCount =12

  constructor() { }

  ngOnInit(): void {
  }
  onSortUpdated(newSort: string): void{
    this.sort = newSort;
  }
}
