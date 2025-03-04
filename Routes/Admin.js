const { PrismaClient } = require('@prisma/client/extension');
const express = require('express');
const Admin = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const prisma = new PrismaClient;
const Products = require('./Product.js');

dotenv.config();
Admin.post('/signin',async(req,res)=>{
    try{
        const data = req.body;
        const jwt_secret = process.env.JWT_SECRET
        const admin =await prisma.admin.create({
            data:{
                name:data.name,
                email:data.email,
                password:data.password
            }
        })
        if(!admin){
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

Admin.post('/login',async(req,res)=>{
    try{
        const data = req.body;
        const jwt_secret = process.env.JWT_SECRET
        const admin =await prisma.admin.findFirst({
            where:{
                email:data.email,
                password:data.password
            }
        })
        if(!admin){
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
Admin.use('/Products',Products);

module.exports = Admin
