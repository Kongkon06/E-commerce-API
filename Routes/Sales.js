const { PrismaClient } = require('@prisma/client/extension');
const express = require('express');
const Sales = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const prisma = new PrismaClient;

dotenv.config();
Sales.post('/signin',async(req,res)=>{
    try{
        const data = req.body;
        const jwt_secret = process.env.JWT_SECRET
        const Sales =await prisma.Sales.create({
            data:{
                name:data.name,
                email:data.email,
                password:data.password
            }
        })
        if(!Sales){
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
});

Sales.post('/login',async(req,res)=>{
    try{
        const data = req.body;
        const jwt_secret = process.env.JWT_SECRET
        const Sales =await prisma.Sales.findFirst({
            where:{
                email:data.email,
                password:data.password
            }
        })
        if(!Sales){
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
Sales.post('/',(req,res)=>{});

Sales.post('/',(req,res)=>{});

module.exports = Sales