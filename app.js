require('dotenv').config();
const express = require('express');
const app = express();

const userRouter = require('./api/users/users.router');
const studentRouter = require('./api/students/students.router');

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/students', studentRouter);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is running at PORT ${port}`);
});