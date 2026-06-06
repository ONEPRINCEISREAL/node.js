const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end(); // Ignore favicon requests

    const log = `${Date.now()}: ${req.url} New Request received \n`;
    const myUrl = url.parse(req.url, true);
    console.log("Parsed URL: ", myUrl);
    
    
    fs.appendFile("log.txt", log, (err) => {
    if (err) {
        console.error(err);
        res.end("Error writing log");
        return;
    }

    switch(myUrl.pathname) {
        case "/":
            res.end("Hello from the server!");
            break;
        case "/about":
            res.end("This is the about page.");
            break;
        case "/contact":
            const username = myUrl.query.username || "Guest";
            res.end(`This is the contact page. Hello, ${username}!`);
            break;
        default:
            res.statusCode = 404;
            res.end("Page not found");
    }
}); 
});


myServer.listen(8000, () => {
    console.log("Server is listening on port 8000");
});

