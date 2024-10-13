const mongoose = require("mongoose");
const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

mongoose.connect("mongodb+srv://saurabh:3hmgXGct7peQgN2k@100xdevs.ahe1t.mongodb.net/test-mongoose");

const User = mongoose.model('Users', {
    name: String,
    email: String,
    password: String,
});

// const user = new User({
//     name: "Test",
//     email: 'Test@test.com',
//     password: "pwd",
// })

// user.save();  // Without this data will not be putted in the db 

app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: email}); 

    if(existingUser){
        res.status(400).send({message: "User already exists"});
    }

    const user = new User({
        name,
        email,
        password,
    })

    user.save();

    res.json({
        msg: "User created successfully",
    })
})

app.listen(PORT, () => console.log("Server is up"))

