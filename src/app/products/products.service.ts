import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../products/product';
import { Category } from '../site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.http.get<Product>(productUrl);
  }

  getCategory(): Observable<Category>{
    const categoryUrl = 'http://localhost:3000/categories';
    return this.http.get<Category>(categoryUrl);
  }

  // tslint:disable-next-line: typedef
  createProduct(productBody): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.http.post<Product>(productUrl, productBody);
  }

  // tslint:disable-next-line: typedef
  viewProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products' + productId;
    return this.http.get<Product>(productUrl);
  }

  // tslint:disable-next-line: typedef
  updateProduct(productId, productBody): Observable<Product>{
    const productUrl = 'http://localhost:3000/products' + productId;
    return this.http.put<Product>(productUrl, productBody);
  }

    // tslint:disable-next-line: typedef
    deleteProduct(productId): Observable<Product>{
      const productUrl = 'http://localhost:3000/products' + productId;
      return this.http.delete<Product>(productUrl);
    }

     // tslint:disable-next-line: typedef
     searchCategoryProducts(categoryId): Observable<Product>{
      const productUrl = 'http://localhost:3000/products?categoryId=' + categoryId;
      return this.http.get<Product>(productUrl);
    }

    // tslint:disable-next-line: typedef
    searchDateProducts(dateParam): Observable<Product>{
      const productUrl = 'http://localhost:3000/products?date=' + dateParam;
      return this.http.get<Product>(productUrl);
    }
}
