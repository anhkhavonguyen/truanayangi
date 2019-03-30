import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { AngiComponent } from './angi/angi.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: FoodComponent
}, {
  path: 'add-food',
  pathMatch: 'full',
  component: AddFoodComponent
},
{
  path: 'angi',
  pathMatch: 'full',
  component: AngiComponent
}, {
  path: 'edit-food',
  // path: ':id',
  pathMatch: 'full',
  component: FoodEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
