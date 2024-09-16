// DATABASES

/*
    Data usually allows access tp 4 primitives
    1. Create data
    2. Read data
    3. Update data
    4. Delete data

    Also known as CRUD

    3 Jargons of database

    1. Cluster
    2. Database
    3. Table  
*/

// Mongoose -> Define your schema

/*
    const UserSchema = new mongoose.Schema({
        username: String,
        password: String
    })

    const User = mongoose.model('User', UserSchema);

    //CREATE

    User.create({
        username: req.body.username,
        password: req.body.password
    })

    //READ

    User.findById("1");
    user.findOne({
        username: "abc@xyz.com"
    })
    user.find({
        username: "abc@xyz.com"
    })

    //UPDATE
    Use.updateOne(
    {"id": "1"},
    { $push: { purchasedCourses: courseId}}
    )

    // DELETE

    User.deleteMany({}) // Delete Everything
    User.deleteOne({username: xyz@abc.com})
*/

