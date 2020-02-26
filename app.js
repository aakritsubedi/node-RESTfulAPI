require('dotenv').config();
const express = require('express');
const app = express();

const ROUTES = require('./routes/api.routes');

app.use(express.json());

app.use(ROUTES);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is running at PORT ${port}`);
});