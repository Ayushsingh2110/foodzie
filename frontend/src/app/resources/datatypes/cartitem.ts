import { Food } from "./food_item";

export class cartItem{
    constructor(public food:Food){}
    quantity: number = 1;
    Price: number = this.food.price;
}