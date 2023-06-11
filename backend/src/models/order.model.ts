import {Schema, Types, model} from 'mongoose';
import { Food, FoodSchema } from './food.model';
import { OrderStatus } from '../constants/order_status';

export interface location{
    lat: string;
    lng: string;
}

export const LocationSchema = new Schema<location>(
    {
        lat:{type: String, required:true},
        lng:{type: String, required:true}
    }
);

export interface OrderItem{
    food : Food;
    price : number;
    quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        food: {type: FoodSchema, required:true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true}
    }
);

export interface Order{
    id : string;
    Items : OrderItem[];
    totalPrice : number;
    totalCount : number;
    name : string;
    address : string;
    addressOnMap?: location;
    paymentId : string;
    createdAt : Date;
    updatedAt : Date;
    status : OrderStatus;
    user: Types.ObjectId
}

const OrderSchema = new Schema<Order>(
    {
        name:{type: String, required: true},
        address:{type: String, required: true},
        addressOnMap:{type:LocationSchema, required:true},
        paymentId:{type: String},
        totalPrice:{type:Number, required:true},
        Items:{type:[OrderItemSchema], required:true},
        status: {type: String, default:OrderStatus.NEW},
        user: {type: Schema.Types.ObjectId, required:true}
    },{
        timestamps: true,
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        }
    }
)

export const OrderModel = model('order', OrderSchema);
