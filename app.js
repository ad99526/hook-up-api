const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const {MONGOURI}=require("./keys.js")



mongoose.connect(MONGOURI,
    { useNewUrlParser: true ,
      useUnifiedTopology: true})

mongoose.connection.on('connected',()=>{
    console.log("connected to MOngoo db")
})

mongoose.connection.on('error',(err)=>{
    console.log("error occured",err)
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
// app.use(require('./routes/user'))




app.listen(PORT,()=>{console.log('Running on 5000')})
