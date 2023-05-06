import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { FoodDetailsComponent } from './components/pages/food-details/food-details.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchitem', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'fooditem/:id', component:FoodDetailsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
