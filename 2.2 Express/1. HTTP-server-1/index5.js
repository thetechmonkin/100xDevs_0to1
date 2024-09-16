// AUTHENTICATION

/*
    1, Give the user back a token on signup/login
    2. Ask the user to send back the token in all future requests
    3. When the user logs out ask the user to forget the token (or revoke it from the backend)
*/

// Hashing -> 1 way encryption, Password can not be decrypted not even by the developers. DB stores hashed values of passwords 
// When user enters password then pwd is again converted into hash and compares it with the DB

// Encryption -> 2 way, uses key do encrypt and decrypt

// JWT -> JSON web tokens jwt.io
// Converts complex objects into long string
// It is neither encryption or hashing it is technically is a digital signature
// Any one can see the original output given by the signature
// Signature can be only verified using the password

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const PORT = 3000;
const jwtPassword = "123456";

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
      },
      {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
      },
      {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
      },
];

function userExists(username, password){
    for(let user of ALL_USERS){
        if(user.username === username && user.password === password)
            return true;
    }
    return false;
}

app.post("/sign-in", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User does'nt exists"
        });
    }

    var token = jwt.sign({username: username}, jwtPassword);

    return res.json({
        token,
    })
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;

    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        // Return userers except the logged in one

        res.json({
            users: ALL_USERS.filter(user => user.username !== username)
        });
    }
    catch(err){
        return res.status(403).json({
            msg: "Invalid Token",
        })
    }
})

app.listen(PORT, () => console.log("Server is up and running"))


