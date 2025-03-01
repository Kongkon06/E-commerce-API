const { PrismaClient } = require('@prisma/client/extension');
const express = require('express');
const Product = express.Router();
const dotenv = require('dotenv');
const prisma = new PrismaClient;

dotenv.config();
Product.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const jwt_secret = process.env.JWT_SECRET
        const Product =await prisma.product.findMany();
        if(!Product){
            res.status(411).json({
                msg:"Products are empty"
            })
            return
        }
            res.json({token:token});
            return
    }catch(e){
        res.status(500);
    }
});

Product.add('/',async(req,res)=>{
    try{
        const data = req.body;
        const jwt_secret = process.env.JWT_SECRET
        const Product =await prisma.Product.create({
            data:{
                name:data.email,
                provider:data.password,
                price:data.price
            }
        })
        if(!Product){
            res.status(411).json({
                msg:"user is not authenticated"
            })
            return
        }
            const token= jwt.sign({userPassword:user.password},jwt_secret);
            res.json({token:token});
            return
    }catch(e){
        res.status(500);
    }
    }
)
Product.update('/',async(req,res)=>{
    try{
        const data = req.body;
        const product = await prisma.product.update({
            where:{
                name:data.name,
                price:data.price
            }
        })
    }catch(e){

    }
});

Product.delete('/',(req,res)=>{});

module.exports = Product