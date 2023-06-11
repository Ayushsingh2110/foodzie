import express from "express";
import cors from "cors";
import foodRouter from './Router/food.router';
import userRouter from './Router/user.router';
import orderRouter from './Router/order.router';
import dotenv from 'dotenv';
dotenv.config();
import { dbConnect } from "./config/DB.config";
dbConnect();


const app = express();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}));

app.use('/api/foods', foodRouter);

app.use('/api/user', userRouter);

app.use('/api/orders', orderRouter);

const port = 5000;
app.listen(port, () => {
    console.log('website served on http://localhost:' + port);
});