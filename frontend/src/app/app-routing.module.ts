import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { FoodDetailsComponent } from './components/pages/food-details/food-details.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginFormComponent } from './components/pages/login-form/login-form.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchitem', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'fooditem/:id', component:FoodDetailsComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'login-form', component:LoginFormComponent},
  {path:'register', component:RegisterPageComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
