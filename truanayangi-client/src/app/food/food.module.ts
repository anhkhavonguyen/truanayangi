import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { FoodRoutingModule } from './food-routing.module';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodComponent } from './food/food.component';
import { AngiComponent } from './angi/angi.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FoodRoutingModule
  ],
  declarations: [FoodComponent, FoodEditComponent, AddFoodComponent, AngiComponent]
})
export class FoodModule { }
