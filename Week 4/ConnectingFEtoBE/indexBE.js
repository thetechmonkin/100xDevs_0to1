const express = require("express");
const cors = require("cors")
const app = express();

const PORT = 3000;

app.use(cors());

app.get('/sum', (req, res) => {
    const num1 = req.query.a;
    const num2 = req.query.b;

    const sum = parseInt(num1) + parseInt(num2);

    res.status(200).send(sum.toString());
})

app.listen(PORT, () => console.log("Server is up"))