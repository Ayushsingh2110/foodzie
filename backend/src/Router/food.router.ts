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

router.get('/search/:searchItem', asyncHandler(
    async (req,res) => {
        const searchRegex = new RegExp(req.params.searchItem, 'i');
        const searchedFood = await FoodModel.find({name: {$regex:searchRegex}})
        res.send(searchedFood);
    }
    )
)
   
router.get('/tags', asyncHandler(
    async (req,res) => {
        const tags = await FoodModel.aggregate([
            {
                $unwind:'$tags'
            },
            {
                $group:{
                    _id: '$tags',
                    count: {$sum: 1}
                }
            },
            {
                $project:{
                    _id: 0,
                    name: '$_id',
                    count:'$count'
                }
            }
        ]).sort({count: -1});
        
        const all = {
            name: 'All',
            count: await FoodModel.countDocuments()
        }

        tags.unshift(all);
        res.send(tags);
})
)

router.get('/tags/:tagname', asyncHandler(
    async (req,res) => {
        const foodByTag = await FoodModel.find({tags: req.params.tagname})
        res.send(foodByTag);
})
);

router.get('/:FoodID', asyncHandler(
async (req,res) => {
    const FoodByID = await FoodModel.findById(req.params.FoodID);
    res.send(FoodByID);
})
);

export default router;
