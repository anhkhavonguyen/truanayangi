import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FoodService } from '../food.service';
import { Food } from 'src/app/shared/interfaces/food';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-angi',
    templateUrl: './angi.component.html',
    styleUrls: ['./angi.component.scss']
})
export class AngiComponent implements OnInit {
    constructor(private foodService: FoodService,
        private router: Router,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar) { }
    foodDataKey = 'food';
    ngOnInit() {

    }


    angi(): void {
        this.foodService.angi()
            .subscribe(res => {
                console.log(res);
                var dataFood = JSON.parse(localStorage.getItem(this.foodDataKey));
                if (dataFood === null) {
                    dataFood = [];
                }
                var food = dataFood.find(x => x.number == res.data);
                this.openSnackBar(food.name, "tén tèn");
                console.log(food);
            });
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
