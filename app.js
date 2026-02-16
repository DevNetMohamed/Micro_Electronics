require('dotenv').config();
const express = require('express');
const mongoose  = require('mongoose');
const userRouters = require('./routes/Users');
const UserLoginRouters = require('./routes/login')
const AddProdacts = require('./routes/AddProduct')
const { statics } = require('./models/Users');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("./static"));

// DB connection
async function dbconnection(){
    try{
     await mongoose.connect(process.env.URL);
        console.log("DB is connected");
        
    }catch (error){
        console.log(error);
    }
}

dbconnection();

// APi
app.use('/api/register', userRouters);
app.use('/api/login', UserLoginRouters);
app.use('/api/addProdact', AddProdacts)



app.get('/app', (req, res, next)=>{
    res.status(200).send("Hello World");
  
})

app.listen(port,(req, res)=>{
    console.log(`the server is running in port ${port}`);
});

