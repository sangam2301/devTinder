const express = require("express");

const app = express();


app.use("/", (err,req,res,next) =>{
    if(err){
        res.status(500).send("something went wrong");
    }
});

app.get("/getUserData" ,  (req ,res) => {
    //try{
    throw new Error("gsghsfh")
    res.send("User Data Sent");
    //}catch(err){
  //      res.status(500).send("Some error contact support team")
    //}

});




app.listen(7777, ()=>{
    console.log('server is successfully connected to port 7777..')
});

