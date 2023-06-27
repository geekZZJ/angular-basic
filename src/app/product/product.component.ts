import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  imgList = 'http://zhangblog.cn:7001/public/banner/banner3.jpg';
  products: Product[];
  keyword: string;
  titleFilter = new FormControl();

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      this.keyword = value;
    });
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
