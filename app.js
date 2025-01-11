const http =require("http");
const fs =require("fs") ;

const server= http.createServer((req,res) => {
    let data="Hello my name is Sami Tahat"
    fs.writeFile('myfile.txt',data,(err)=>{
        if(err){
            res.writeHead(500,{"content-type":"text/plain"})
            res.end("Sorry can't write to the file")
        }
        else{
            fs.readFile('myfile.txt',(err,data)=>{
                if (err){
                    res.writeHead(500,{"content-type":"text/plain"})
                    res.end("Sorry can't read the file")
                }
                else {
                    res.writeHead(200,{"content-type":"text/html"})
                    res.end(`<h1>${data}<h1/>`)
                }
            })
        }
    })
    
})


const thePort=3000;
const theHost="127.0.0.1"
server.listen(thePort,theHost,()=>{
    console.log(`the server is now running on port # ${thePort} and host ${theHost}`)
})