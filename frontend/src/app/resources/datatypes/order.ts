import { cartItem } from "./cartitem";

export class Order{
    id !: number;
    Items !: cartItem[];
    totalPrice !: number;
    totalCount !: number;
    name !: string;
    address !: string;
    paymentId !: string;
    createdAt !: string;
    status !: string;
}