const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) =>{
    if (req.method === "GET") {
        
        const nombre = req.url.split("?")[0]
        const edad = req.url.split("?")[1]
        const siNo = req.url.split("?")[2]
        const fs = require("fs")
        res.writeHead(200, {"Content-Type": "text/plain"});
       if (edad>=18 && siNo=="si"){
        res.end("hola"+ " " + nombre + " " + "eres mayor de edad")
        fs.appendFileSync("respuestaedad.txt", "hola" + nombre + " " + "eres mayor de edad\n")
       }
       else{
        if(edad>=18 && siNo=="no"){
        res.end("hola"+ " " + nombre + " " + "eres mayor de edad")    
        }
        else{
        res.end("hola"+ " " + nombre + " " +"eres menor de edad")    
        }
        
    
       }
        console.log(nombre)
        console.log(edad)
    
    }else{
        res.writeHead(404, { "content-Type": "text/plain"});
        res.end("404 Not Found\n");
    }
});
server.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
  });