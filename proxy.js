const express = require('express');
const request = require('request');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; frame-src 'self'");
    next();
});

app.get('/proxy', (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('URL is required');
    }
    request(url).pipe(res);
});

app.listen(3000, () => {
    console.log('Proxy server running on port 3000');
});
