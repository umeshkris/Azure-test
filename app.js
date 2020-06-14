const http = require('http');

cosnt port =process.env.PORT || 3000
 const server=http.createServer((req,res)=>{
     res.write('<html><head></head><body><h1>Welcome  to nodejs !!</h1></body></html>');
 });
server.listen(port,()=>{

 console.log('server running at port ' + port);
});


    
