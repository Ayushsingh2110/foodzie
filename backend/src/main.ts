import express from "express";
import cors from "cors";
import { sample_data, sample_tags } from "./data";

const app = express();

app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}));

app.get('/api/foods', (req,res) =>{
    res.send(sample_data);
})

app.get('/api/foods/search/:searchItem', (req,res) => {
    const searchItem = req.params.searchItem;
    const searchFoods = sample_data
    .filter(food => food.name.toLowerCase()
    .includes(searchItem.toLowerCase()));
    res.send(searchFoods);
})

app.get('/api/foods/tags', (req,res) => {
    res.send(sample_tags);
})

app.get('/api/foods/tags/:tagname', (req,res) => {
    const tagname = req.params.tagname;
    const FoodWithTag = sample_data
    .filter((food) => food.tags?.includes(tagname));
    res.send(FoodWithTag);
});

app.get('/api/foods/:FoodID', (req,res) => {
    const FoodID = req.params.FoodID;
    const FoodWithID = sample_data
    .find((food) => food.id === FoodID);
    res.send(FoodWithID);
})

const port = 5000;
app.listen(port, () => {
    console.log('website served on http://localhost:' + port);
});