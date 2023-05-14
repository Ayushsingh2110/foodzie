import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
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
    EmptyResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
