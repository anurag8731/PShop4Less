import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  categoryList: Category;
  ngOnInit(): void {
    this.productService.getCategory().subscribe(data => {
      this.categoryList = data;
    });
  }

}
