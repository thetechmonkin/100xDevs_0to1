const express = require("express");
const app = express();

const PORT = 3000;

// AUTHENTICATION
// app.get('/health-checkup', (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if(username !== "test" || password !== 'pass'){
//         res.status(401).json({
//             msg: "Unauthorized Access",
//         });
//         return;
//     }

//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg: "Invalid Kidney",
//         });
//         return;
//     }

//     res.status(400).json({
//         msg: "Kidney is fine",
//     });
// });

// MIDDLEWARES

const userMiddleWare = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != 'test' && password != 'pass'){
        res.status(403).json({
            msg: "Unauthorized Access",
        });
    }
    else
        next();
};

const kidneysMiddleware = () => {
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "Invalid Kidney",
        });
    }
    else
        next();
};

app.get('/health-checkup', userMiddleWare, kidneysMiddleware, (req, res) => {
    res.status(200).json({
        msg: "Kidney is fine",
    });
});

app.get('/kidney-checkup', userMiddleWare, kidneysMiddleware, (req, res) => {
    res.status(200).json({
        msg: "Kidney is fine",
    });
});

app.get('/heart-checkup', userMiddleWare, (req, res) => {
    res.status(200).json({
        msg: "Kidney is fine",
    });
});

// app.use() => Used to call middleware everywhere
// ex = app.use(userAuthentication) --> It will call userAuthentication middleware everywhere
// app.use() can be used multiple times
// so we use app.use(express.json()) -> It is an middleware
// We use app.use(express.json()) for body because we don't know what is body it can be json or text or HTML it could be anything
// So it tells we are expecting a json

// Global caches -> Another middleware we define at the end. It will be called if something is wrong with other routes
// It helps you to give the end user a better error message
// we can have multiple global caches

app.use((wrr, req, res, next) => {
    res.status(500).json({
        msg: "Sorry something is wrong with out server",
    });
});

app.listen(PORT, () => console.log("Server is running"));