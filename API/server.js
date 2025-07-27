//import the library (express and cors here)
const express = require('express');
const cors = require('cors');

// application initialization
const app = express();
const PORT = 3000;

//use cors to allow cross-origin requests
app.use(cors());
app.use(express.json());

/* sets up a route, if receive a get
 request for the root path (/), execute the function 
 with two initial objects req (request from client) and res (respone)*/

app.get('/', (req, res) => {
    res.send('server is running')
});

app.post('/signup', (req, res) => {
    const userData = req.body;
    console.log('Received data from form:', userData);
    res.json({status: 'success', message: `User ${userData.name} registered`});
});

// starts the server and stay running!
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`);
});