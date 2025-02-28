const express = require('express');
const User = express.Router();

User.post('/',(req,res)=>{
    try{
        const user = req.body;
        res.json();
    }catch(e){
        res.json()
    }
});

User.post('/',(req,res)=>{});

User.post('/',(req,res)=>{});

User.post('/',(req,res)=>{});

module.exports = User