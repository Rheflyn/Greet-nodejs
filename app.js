const express = require('express');
const app = express();
const root = require('./root');
const about = require('./about');
const contact = require('./contact');
const gallery = require('./gallery');

const port = 3000;
const name = "John Smith";

app.get('/', (req, res) => {
    res.send(root(name));
});

app.get('/about', (req, res) => {
    res.send(about(name));
});

app.get('/contact', (req, res) => {
    res.send(contact(name));
});

app.get('/gallery', (req, res) => {
    res.send(gallery());
});

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><p>The page you are looking for does not exist WOMP WOMP.</p>');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

/*
 Buan Enrico
 WD-303
 07/28/2024
 */