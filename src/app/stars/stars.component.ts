import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit {
  stars: boolean[] = [false, false, true, true, true];

  @Input() rating: number = 0;

  ngOnInit(): void {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
