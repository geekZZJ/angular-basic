import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: Product[] = [
    new Product(1, '第一个商品', 51, 0.4, '描述1', ['类目1', '类目2']),
    new Product(2, '第二个商品', 52, 0.4, '描述2', ['类目1', '类目2']),
    new Product(3, '第三个商品', 53, 0.4, '描述3', ['类目1', '类目2']),
  ];
}

class Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  desc: string;
  categories: Array<string>;
  constructor(
    id: number,
    title: string,
    price: number,
    rating: number,
    desc: string,
    categories: Array<string>
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.rating = rating;
    this.desc = desc;
    this.categories = categories;
  }
}
