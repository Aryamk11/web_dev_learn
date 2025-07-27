//import the library (express here)
const express = require('express');

// application initialization
const app = express();

const PORT = 3000;

/* sets up a route, if receive a get
 request for the root path (/), execute the function 
 with two initial objects req (request from client) and res (respone)*/

app.get('/', (req, res) => {
    res.send('Hello!!! (from first express server!)')
});

// starts the server and stay running!
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`);
});