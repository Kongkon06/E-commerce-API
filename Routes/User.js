const { PrismaClient } = require('@prisma/client/extension');
const express = require('express');
const User = express.Router();

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

User.post('/',(req,res)=>{});

User.post('/',(req,res)=>{});

User.post('/',(req,res)=>{});

module.exports = User