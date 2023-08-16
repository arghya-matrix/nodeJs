require('dotenv').config();
const express= require("express");
const server= express();

server.use(express.static(process.env.STATIC_FOLDER));

server.get("/home", (request, response) => {
    response.statusCode = 200;
    response.json({"text": "Hello World"});
   
});

server.listen( process.env.PORT, ()=> {
    console.log("Server Started at" ,process.env.PORT);
})
