import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partial/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SearchComponent } from './components/partial/search/search.component';
import { TagsComponent } from './components/partial/tags/tags.component';
import { FoodDetailsComponent } from './components/pages/food-details/food-details.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { EmptyResultComponent } from './components/partial/empty-result/empty-result.component';
import { LoginFormComponent } from './components/pages/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { LoadingComponent } from './components/partial/loading/loading.component'
import { LoadingInterceptor } from './resources/interceptors/loading.interceptor';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { InputContainerComponent } from './components/partial/input-container/input-container.component';
import { InputValidationComponent } from './components/partial/input-validation/input-validation.component';
import { TextInputComponent } from './components/partial/text-input/text-input.component';
import { OrderItemListComponent } from './components/partial/order-item-list/order-item-list.component';
import { MapComponent } from './components/partial/map/map.component';
import { AuthInterceptor } from './resources/interceptors/auth.interceptor';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    SearchComponent,
    TagsComponent,
    FoodDetailsComponent,
    CartPageComponent,
    EmptyResultComponent,
    LoginFormComponent,
    RegisterPageComponent,
    LoadingComponent,
    CheckoutComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    OrderItemListComponent,
    MapComponent,
    PaymentPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
