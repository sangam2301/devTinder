const express = require("express");

const app = express();

app.use("/user", (req,res) =>{
    res.send("HAHAHAHAHAHA");
});

// This will only handle GET call to /user
app.get("/user", (req,res) => {
    res.send({firstname: "Sangam", lastname: "Pardhi"})
});

app.post("/user", (req,res) =>{
    console.log("Save Data to the database");
    res.send("Data successfully saved to database !");
});

app.delete("/user", (req,res) => {
    res.send("Deleted successfully!");
});

// this will call all the HTTP method APT call to /test

app.use("/test",(req, res) =>{
    res.send('Hello from the server!');
});

app.listen(7777, ()=>{
    console.log('server is successfully connected to port 7777..')
});

