import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/shared/interfaces/food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {
  foods: any = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  selectedBook: any;
  selectedFav: any;
  Food: Food;
  readingList: {};
  favorite: any;

  constructor(private foodService: FoodService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // const param = +this.route.snapshot.paramMap.get('id');
    // if (param) {
    //   console.log(param);
    //   const id = param;
    //   this.getfood(id);
    // }
    // this.getBooks();
  }

  getfood(id: number) {
    this.foodService.getFoodDetails(id)
      .subscribe(
        (results: Food) => {
          this.Food = results;
        }
      );
  }
}
