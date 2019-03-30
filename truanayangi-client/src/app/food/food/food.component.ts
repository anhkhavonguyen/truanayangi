import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/interfaces/food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  food: Food[];
  foodDataKey = 'food';
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.allfood();
  }

  allfood() {
    this.foodService.getFood()
      .subscribe(res => {
        this.food = res.data;
        localStorage.setItem(this.foodDataKey, JSON.stringify(this.food));
      }
      );
  }
}
