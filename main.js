const http = require('http');
const hostName = 'localhost'; 
const port = 3000; 


const server = http.createServer((req, res)=>{
  switch (req.url) {
    case '/':
        res.statusCode = 200; 
        res.setHeader('Content-Type' , 'text/html');
        res.end('<h1>Bem-vindo!</h1>');
        break;

    case '/frutas':
        res.statusCode = 200; 
        res.setHeader('Content-Type' , 'application/json');
        const frutas = ['Maça', 'Banana', 'Laranja']; 
        res.end(JSON.stringify(frutas)); 
        break
  
    default:
        res.statusCode = 404;
        res.setHeader('Content-Type' , 'text/plain'); 
        res.end('Not found'); 
        break;
  }
    


});

server.listen(port, hostName, ()=>{
    console.log(`Server Running... http://${hostName}:${port}`); 

});