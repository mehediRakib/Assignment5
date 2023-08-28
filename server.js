const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{


    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write("This is a Home Page.");
        res.end();
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write("This is About Page.");
        res.end();
    }
    else if(req.url=='/contact'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write("This is Contact Page.");
        res.end();
    }
    else if(req.url=='/file-write'){

        fs.writeFile("demo.txt","hello world",(err)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end("File is not created ");

            }
            else{
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end("File is created succesffully");

            }
        });
        res.end();
    }

})

server.listen(3000,()=>{
    console.log("Server created succesfully..");
});