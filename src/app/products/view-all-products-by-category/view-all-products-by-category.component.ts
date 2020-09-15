import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.scss']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  productList: Product;
  searchCategory = '';
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.searchCategory = data.id;
    });

    this.productsService.searchCategoryProducts(this.searchCategory).subscribe(data => {
      this.productList = data;
    });
  }

}
