import express from "express";
import cors from "cors";
import { sample_data, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

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

app.post('/api/user/login',(req,res) =>{
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email &&
        user.password === password);
    if(user){
        res.send(createToken(user));
    }else{
        res.status(400).send('User name or Password is not valid');
    }
})

const createToken = (user:any) => {
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    },'YouNeverKnow',{
        expiresIn: '15d'
    });

    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log('website served on http://localhost:' + port);
});