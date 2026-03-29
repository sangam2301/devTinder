const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) =>{
    const user = new User({
        firstName : "Sangam",
        lastName : "Pardhi",
        emailId : "sangam@gmail.com",
        password: "sangam@23",
    });

    try{
    await user.save();
    res.send("User added successfully")
    }catch(err){
        res.status(400).send("Error saving the user:" + err.message);
    }
});

connectDB()
.then(() =>{
    console.log("Database connection established...");
    app.listen(7777, ()=>{
    console.log('server is successfully connected to port 7777..')
  });
})
.catch((err)=>{
    console.error("Database cannot be connected!!");
});


