const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'Hello': 'Index page'
    });
});

router.get('/another', (req, res) => {
    res.json({
        'Hello': 'Another page'
    });
});

app.use('./netlify/functions/api', router);

module.exports.handler = serverless(app);