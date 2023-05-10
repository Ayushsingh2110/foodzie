import {Food} from './app/resources/datatypes/food_item'
import { tag } from './app/resources/datatypes/tag'
export const sample_data: Food[] = [
    {   
        id:"1",
        name:"Paneer Mutter",
        price:0,
        imageUrl:'./assets/paneer_mutter.jpg',
        stars: 4.5, 
        tags: ['Indian','main dish'],
        favorite:true,
        cooktime:'20-30',
        origins:['India'],
    },
    {   
        id:"2",
        name:"Paneer Bhurjee",
        price:160,
        imageUrl:'./assets/paneer_mutter.jpg',
        stars: 4.5, 
        tags: ['paneer','bhurjee','main dish'],
        favorite:false,
        cooktime:'20-30',
        origins:['India'],
    },
    {   
        id:"3",
        name:"Paneer Masala",
        price:160,
        imageUrl:'./assets/paneer_mutter.jpg',
        stars: 4.5, 
        tags: ['Indian','main dish'],
        favorite:false,
        cooktime:'20-30',
        origins:['India','nepal'],
    }
]

export const sample_tags: tag[] = [
    {name:'Indian', count:10},
    {name:'French', count:10},
    {name:'Chinese', count:10},
    {name:'Italian', count:10},
    {name:'Fast Food', count:10},
    {name:'Pizza', count:10},
    {name:'Burger', count:10},
    {name:'Healthy', count:10}
]