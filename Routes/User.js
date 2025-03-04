const { PrismaClient } = require('@prisma/client/extension');
const express = require('express');
const User = express.Router();
const Product = require('./Product.js');

const prisma = new PrismaClient;
User.post('/',async (req,res)=>{
    try{
        const data = req.body;
        const user = await prisma.user.create({
            data:{
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            }
        })
        if(!user){
            res.status(500)
        }
        res.json();
    }catch(e){
        res.status(411).json({
            msg:"Invalid credentials"
        })
    }
});

User.use('/products',Product);

User.post('/orders',async (req,res)=>{
    try{
    const data = req.data;
    const orders = await prisma.user.findFirst({
        where:{
            name:data.name
        }
    })
        res.json({
            orders:orders
        })
    }catch(e){
        res.status(411).json('Error while fetching orders');
    }
});

User.post('/',(req,res)=>{});

module.exports = User
