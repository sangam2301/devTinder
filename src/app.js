const express = require("express");

const app = express();

app.get("/user/:UserId/:name/:password", (req,res) => {
    console.log(req.params);
    res.send({firstname: "Sangam", lastname: "Pardhi"});
});


app.listen(7777, ()=>{
    console.log('server is successfully connected to port 7777..')
});

