import { Component, Input, OnInit } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  @Input() name: any;
  @Input() index: any;
  isClicked = false;

  constructor(private ratingService: RatingService) { }

  rating: number = 0;

  rate(value: number) {
    this.ratingService.addRating(value, this.index);
  }

  ngOnInit() {}

}
