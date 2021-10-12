// Setting up express app
const { Console } = require('console');
const express = require('express');
const app = express();

// importing path
const path = require('path');

// configuring dotenv
require('dotenv').config();

// importing port from dotenv file
const PORT = process.env.PORT;

// static files
app.use(express.static('public'));

// template engine
app.set('view engine', 'ejs');

// basic routing

// home page
app.get('/',(req,res)=>{
    res.render('home');
})

// products page
app.get('/projects',(req,res)=>{
    res.render('projects');


})

// about page
app.get('/about',(req,res)=>{
    res.render('about');
})

// handling 404 
app.use((req,res,next)=>{
    res.status(400).render('404');
})

// 
app.listen(PORT,()=>{
    console.log(`App running on port http://localhost:${PORT}`);
})
