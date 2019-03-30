import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Food } from 'src/app/shared/interfaces/food';
import { ObjectHelper } from 'src/app/shared/object-helpers';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  addValueForm: FormGroup = new FormGroup({});

  constructor(private foodService: FoodService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addValueForm = this.formBuilder.group({
      name: [''],
      description: [''],
      status: [''],
      address: [''],
      number: [''],
    });
  }

  add(): void {
    const name = this.addValueForm.get('name').value;
    const description = this.addValueForm.get('description').value;
    const status = this.addValueForm.get('status').value;
    const address = this.addValueForm.get('address').value;
    const number = this.addValueForm.get('number').value;

    const food: Food = {
      name: name,
      description: description,
      status: status,
      id: '',
      address: address,
      number: number
    };

    this.foodService.addFood(food)
      .subscribe(data => {
        console.log(data);
      });
  }
}
