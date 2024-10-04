import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  rating = []
  constructor() { }

  addRating(rate, index){
    this.rating[index] = rate
  }

  freeRating(){
    this.rating = [];
  }

  getRating(){
    return this.rating;
  }
}
