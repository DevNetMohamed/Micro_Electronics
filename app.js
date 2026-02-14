require('dotenv').config();
const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

async function dbconnection(){
    try{
     await mongoose.connect(process.env.URL);
        console.log("DB is connected");
        
    }catch (error){
        console.log(error);
    }
}

dbconnection();


app.get('/app', (req, res, next)=>{
    res.status(200).send("Hello World");
  
})

app.listen(port,(req, res)=>{
    console.log(`the server is running in port ${port}`);
});

