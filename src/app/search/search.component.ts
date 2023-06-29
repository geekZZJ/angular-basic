import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  formModel: FormGroup;
  categories: string[];
  constructor(private productService: ProductService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, this.positiveValidator],
      category: ['-1'],
    });
  }

  ngOnInit(): void {
    this.categories = this.productService.getAllCategories();
  }

  positiveValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    }
    const price = parseInt(control.value);
    console.log(price);
    if (price > 0) {
      return null;
    } else {
      return { positiveNumber: true };
    }
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}
