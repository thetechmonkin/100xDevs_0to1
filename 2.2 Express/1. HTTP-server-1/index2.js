// HTTP SERVER 2 - Kidney app

const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

let users = [{
    name: 'John',
    kidneys: [{
            healthy: false,
        }]
}];

app.get('/', (req, res) => {
    let numberOfKidneys = users[0].kidneys.length;
    let numberOfHealthyKidneys = 0;
    let numberOfUnhealthyKidneys = 0;

    users[0].kidneys.filter((kidney) => {
        if(kidney.healthy)
            numberOfHealthyKidneys++;
    });

    numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.status(200).send({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });

});

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({healthy: isHealthy});

    res.json({
        msg: "Done",
    });
});

app.put('/', (req, res) => {
    users[0].kidneys.map(kidney => kidney.healthy = true);

    res.json({
        msg: "Operation Successful all kidneys are healthy now",
    });
});

app.delete('/', (req, res) => {
    let newKidneys = [];
    users[0].kidneys.map(kidney => {
        if(kidney.healthy === true){
            newKidneys.push(kidney);
        }
    });
    users[0].kidneys = newKidneys;

    res.json({
        msg: "Unhealthy Kidneys deleted",
    })
});

app.listen(PORT, () => {
    console.log("Your kidneys app is running on PORT ", PORT);
})
