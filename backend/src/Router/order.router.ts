import { Router } from "express";
import asyncHandler from "express-async-handler";
import { OrderModel } from "../models/order.model";
import { OrderStatus } from "../constants/order_status";
import auth from '../middlewares/auth.mid';

const router = Router();
router.use(auth);

router.post('/creat', asyncHandler(async (req:any,res) => {
    const requestOrder = req.body;

    if(requestOrder.items.length <= 0){
        res.status(400).send('Cart Is Empty!');
        return;
    }

    await OrderModel.deleteOne({
        user : req.user.id,
        status : OrderStatus.NEW
    })

    const newOrder = new OrderModel({...requestOrder,user: req.user.id});
    await newOrder.save();
    res.send(newOrder);
}))

export default router;


