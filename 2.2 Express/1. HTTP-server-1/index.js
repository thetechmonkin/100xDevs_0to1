const express = require("express");
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello World ---- My first HTTP server")
});

app.get('/reqParam', (req, res) => {
    const num = req.query.n;
    res.send(`Hello from server the number is ${num}`);
    res.send(num.toString());
});

app.listen(PORT, () => {
    console.log('Server is up and running :)');
});