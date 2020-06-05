const express =require('express');
const http = require('http');
const  app= express();


 const server=http.createServer((req,res)=>{
     res.write('<html><head></head><body><h1>Welcome  to nodejs !!</h1></body></html>');
 });
server.listen(3001);


    