import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment, Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  comments: Comment[];
  newRating = 5;
  newComment = '';
  showComment = false;

  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId: number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(+productId);
    this.comments = this.productService.getCommentsByProductId(+productId);
  }

  addComment() {
    const comment = new Comment(
      0,
      this.product.id || 1,
      new Date().toISOString(),
      'aaa',
      this.newRating,
      this.newComment
    );
    const sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.comments.unshift(comment);
    this.newComment = '';
    this.newRating = 5;
    this.showComment = false;
  }
}
