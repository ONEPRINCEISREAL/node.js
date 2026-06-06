const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {

    const log = `${Date.now()}: ${req.url} New Request received \n`;
    fs.appendFile("log.txt", log, (err) => {
    if (err) {
        console.error(err);
        res.end("Error writing log");
        return;
    }

    switch(req.url) {
        case "/":
            res.end("Hello from the server!");
            break;
        case "/about":
            res.end("This is the about page.");
            break;
        case "/contact":
            res.end("This is the contact page.");
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

