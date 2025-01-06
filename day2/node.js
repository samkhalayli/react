var http = require('http');

http.createServer(
     function (req, res) {
          res.write(`<h1>Welcome!</h1>`); //write a response to the client
          res.end(); //end the response
     }
).listen(8080); //the server object listens on port 8080

//To test in the browser:

//http://127.0.0.1:8080/
//http://localhost:8080/
