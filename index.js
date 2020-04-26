// // Include the server in your file
// const server = require('server');
// const { get, post } = server.router;

// // Handle requests to the url "/" ( http://localhost:3000/ )
// server([
//   get('/', ctx => home.html)
// ]);

// const http = require('http');

// // Create an instance of the http server to handle HTTP requests
// let app = http.createServer((req, res) => {
//     // Set a response type of plain text for the response
//     res.writeHead(200, {'Content-Type': 'text/plain'});

//     // Send back a response and end the connection
//     res.end('Hello World!\n');
// });

// // Start the server on port 3000
// app.listen(3000, '127.0.0.1');
// console.log('Node server running on port 3000');


var express = require("express");
var app = express();

app.use(express.static('./app', {index: 'spanish.html'}));

//make way for some custom css, js and images
// app.use(express.static('../client/', {index: 'login.html'}))
app.use('/css', express.static(__dirname + '/app/css'));
app.use('/js', express.static(__dirname + '/app/js'));
app.use('/img', express.static(__dirname + '/app/img'));

var port_number = app.listen(process.env.PORT || 3000);

var server = app.listen(port_number, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});

// app.listen(port_number);


// var http = require('http'),
//     fs = require('fs');


// fs.readFile('./home.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(8000);
// });
