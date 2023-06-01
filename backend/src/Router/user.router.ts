import { Router } from "express";
import { sample_users } from "../data";
import jwt  from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import { User, UserModel } from "../models/user.model";
import bcrypt from 'bcryptjs';

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

router.post('/register', asyncHandler(
    async (req,res) => {
        const {name,email,password,address} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            res.status(400).send('Account already exists, please login!');
            return; 
        }

        const encrypPass = await bcrypt.hash(password, 10);

        const newUser:User = {
            id:'',
            name,
            email: email.toLowerCase(),
            password: encrypPass,
            token:'',
            address,
            isAdmin: false
        }

        const UserToDB = await UserModel.create(newUser);
        res.send(createToken(UserToDB));
    }
))

export default router;