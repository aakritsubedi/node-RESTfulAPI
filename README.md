## Learning NODE 

### Setting up project 

- install node.js [download](https://nodejs.org/en/)
- create a working folder
- navigate to working folder in terminal/command prompt
- `npm init` and enter the descriptions, this will initilize the package.json file `stores all your dependencies`

### Installing Pacakges 

- npm install `package_name`  || yarn add `package_name`  (Install Locally)
- npm install -g `package_name` || yarn add -g `package_name` (Install Globally)
- npm install -D `package_name` || yarn add -D `package_name` (Install Dev dependencies)

### Running files

- `node <file_name>`

<hr>

### Step1: Installing express and running server

##### in app.js file  
- require the express module
`const express = require('express');`  
`const app = express();`  

- create a sample API 
`
app.get('/api',(req, res)=>{
 res.json({
     success: 1,
     message: "Working ... "
 })
});
`
- add PORT 
`
app.listen(3000, ()=>{
    console.log("Server is running at PORT 3000");
});
`

- test in browser
`localhost:3000/api`

