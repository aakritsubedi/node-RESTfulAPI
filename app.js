require('dotenv').config();
const express = require('express');
const app = express();

app.get('/api',(req, res)=>{
 res.json({
     success: 1,
     message: "Working ... "
 })
});

app.listen(process.env.APP_PORT, ()=>{
    console.log("Server is running at PORT 3000");
});