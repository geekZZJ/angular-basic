import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 51, 1.4, '描述1', ['类目1', '类目2']),
    new Product(2, '第二个商品', 52, 2.5, '描述2', ['类目1', '类目2']),
    new Product(3, '第三个商品', 53, 0.3, '描述3', ['类目1', '类目2']),
    new Product(4, '第四个商品', 57, 0.3, '描述4', ['类目1', '类目2']),
    new Product(5, '第五个商品', 59, 0.3, '描述5', ['类目1', '类目2']),
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2022-02-02 22:22:22', '张三', 3, '评论内容一'),
    new Comment(2, 1, '2022-03-02 22:22:22', '张三', 4, '评论内容二'),
    new Comment(3, 1, '2022-04-02 22:22:22', '张三', 2, '评论内容三'),
    new Comment(4, 1, '2022-05-02 22:22:22', '张三', 1, '评论内容四'),
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((item) => item.id === id) || {};
  }

  getCommentsByProductId(id: number): Comment[] {
    return this.comments.filter((comment) => comment.productId === id);
  }
}

export class Product {
  constructor(
    public id?: number,
    public title?: string,
    public price?: number,
    public rating?: number,
    public desc?: string,
    public categories?: Array<string>
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
