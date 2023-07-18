const http=require('http');
const port=8000;

const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=='/'){
        res.write('<h1>Helloo world</h1>')
        res.end();
    }
        else if(req.url==="/about"){
            res.write('<h1>About page</h1>')
            res.end();
        }
});
server.listen(port,()=>{
    console.log(`Server is running on port ${port}...`);
})