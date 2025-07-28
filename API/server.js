//import the library (express, cors, and fs here)
const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;


// application initialization
const app = express();
const PORT = 3000;
const DB_FILE = 'database.json'

//use cors to allow cross-origin requests
app.use(cors());
app.use(express.json());

/* sets up a route, if receive a get
 request for the root path (/), execute the function 
 with two initial objects req (request from client) and res (respone)*/
app.get('/', (req, res) => {
    res.send('server is running')
});

app.post('/signup', async (req, res) => {
    const userData = req.body;
    console.log('Received data from form:', userData);
    
    try{
        let data = awaitfs.readFile(DB_FILE, 'uft-8');
        let submissions = JSON.parse(data);
        //add the new data
        submissions.push(userData);
        await fs.writeFile(DB_FILE, JSON.stringify(submissions, null, 2));
    
    res.json({status: 'success', message: `User ${userData.name} registered`});
    } catch (error){
        // If the file doesn't exist yet, create it with the first entry
        await fs.writeFile(DB_FILE, JSON.stringify([userData], null, 2));
        res.json({ status: 'success', message: 'Database created and user registered.' })
    }
});

app.get('/submissions', async (req, res) => {
    try {
        const data = await fs.readFile(DB_FILE, 'utf-8');
        const submissions = JSON.parse(data);
        res.json(submissions);
    } catch (error) {
        // ff file doesn't exist, respond with an error/empty message
        res.status(404).json({ message: "No submissions found." });
    }
});

// starts the server and stay running!
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`);
});