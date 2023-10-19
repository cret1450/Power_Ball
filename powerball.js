// server.js
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

let whiteBalls = "";
const white = [];
let redBall = "";
let prev = "";

whiteBalls = Math.floor(Math.random() * 69);
//prev = whiteBalls;
white.push(whiteBalls);
for (let i = 0; i < 4; i++) {
    whiteBalls = Math.floor(Math.random() * 69);
    while (whiteBalls === white[i]) {
        whiteBalls = Math.floor(Math.random() * 69);
    }
    white.push(whiteBalls);
    // whiteBalls +=  Math.floor(Math.random() * 69);
    // whiteBalls += " ";
}
redBall +=  Math.floor(Math.random() * 26);
redBall += "<br>";


//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>${whiteBalls}</h1> <h1>${redBall}</h1>`);
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});