import { Router } from "express";
import { sample_users } from "../data";
import jwt  from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import { UserModel } from "../models/user.model";
import { FoodModel } from "../models/food.model";

const router = Router();

router.get('/seed', asyncHandler(
    async (req,res) => {
        const userCounts = await UserModel.countDocuments();
        if(userCounts>0){
            res.send('seed is done again!');
            return;
        }
        await UserModel.create(sample_users);
        res.send('seed is done!');
    }
))

router.post('/login', asyncHandler (
    async (req,res) =>{
    const {email, password} = req.body;
    const user = await UserModel.findOne({email, password});
    if(user){
        res.send(createToken(user));
    }else{
        res.status(400).send('User name or Password is not valid');
    }
})
);

const createToken = (user:any) => {
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    },'YouNeverKnow',{
        expiresIn: '15d'
    });

    user.token = token;
    return user;
}

export default router;