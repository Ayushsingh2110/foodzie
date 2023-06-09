import { LatLng } from "leaflet";
import { cartItem } from "./cartitem";

export class Order{
    id !: number;
    Items !: cartItem[];
    totalPrice !: number;
    totalCount !: number;
    name !: string;
    address !: string;
    addressOnMap?: LatLng;
    paymentId !: string;
    createdAt !: string;
    status !: string;
}