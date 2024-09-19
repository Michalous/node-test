const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => { 
    res.json({ 
        hello: 'world' 
    }); 
});

router.get('/text', (req, res) => { 
    res.json({ 
        hello: 'text' 
    }); 
});

app.use('/.netlify/functions/api', router);  // path must route to lambda

module.exports.handler = serverless(app);
