import { Injectable } from '@angular/core';
import { cart } from '../resources/datatypes/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../resources/datatypes/food_item';
import { cartItem } from '../resources/datatypes/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private Cart: cart = this.getCartItemsFromLocalStorage();
  private cartSubject: BehaviorSubject<cart> = new BehaviorSubject(this.Cart)
  constructor() { }

  private getCartItemsFromLocalStorage():cart{
    const CartItem = localStorage.getItem('cart');
    return CartItem? JSON.parse(CartItem) : new cart();
  }

  private setCartItemToLocalStorage():void{
    this.Cart.TotalPrice = this.Cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.Price, 0);
  this.Cart.TotalCount = this.Cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.Cart);
    localStorage.setItem('cart',cartJson);
    this.cartSubject.next(this.Cart);
  }

  addToCart(food:Food):void{
    let CartItem = this.Cart.items.find(item => item.food.id == food.id);
    if(CartItem)
      return;
    this.Cart.items.push(new cartItem(food));
    console.log()
    this.setCartItemToLocalStorage();
  }

  removeFromCart(foodId:string):void{
    this.Cart.items = this.Cart.items.filter(item => item.food.id !== foodId); 
    this.setCartItemToLocalStorage();
  }

  ChangeQuantity(foodId:string, quantity:number){
    let cartItem = this.Cart.items.find(item => item.food.id == foodId);
    if(!cartItem)
      return;
    cartItem.quantity = quantity;
    cartItem.Price = quantity * cartItem.Price 
  }

  ClearCart(){
    this.Cart = new cart();
    this.setCartItemToLocalStorage();
  }

  getCartObservable():Observable<cart>{
    return this.cartSubject.asObservable();
  }



}
