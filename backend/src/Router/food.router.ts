import { Router } from "express";
import { sample_data, sample_tags } from "../data";
import asyncHandler from 'express-async-handler';
import { FoodModel } from "../models/food.model";

const router = Router();

router.get('/seed', asyncHandler(
    async (req,res) => {
        const foodCounts = await FoodModel.countDocuments();
        if(foodCounts>0){
            res.send('seed is done again!');
            return;
        }
        await FoodModel.create(sample_data);
        res.send('seed is done!');
    }
))

router.get('/', asyncHandler(
    async (req,res) =>{
    const Foods = await FoodModel.find();
    res.send(Foods);
}))

router.get('/search/:searchItem', (req,res) => {
    const searchItem = req.params.searchItem;
    const searchFoods = sample_data
    .filter(food => food.name.toLowerCase()
    .includes(searchItem.toLowerCase()));
    res.send(searchFoods);
})

router.get('/tags', (req,res) => {
    res.send(sample_tags);
})

router.get('/tags/:tagname', (req,res) => {
    const tagname = req.params.tagname;
    const FoodWithTag = sample_data
    .filter((food) => food.tags?.includes(tagname));
    res.send(FoodWithTag);
});

router.get('/:FoodID', (req,res) => {
    const FoodID = req.params.FoodID;
    const FoodWithID = sample_data
    .find((food) => food.id === FoodID);
    res.send(FoodWithID);
})

export default router;
