const mongoose = require("mongoose");

const connectDB = async () =>{
    await mongoose.connect(
    "mongodb+srv://sangampardhi7:xLwCfVGWb3AXTKk9@namastenode.s0apmmt.mongodb.net/devTinder" 
 );
};

module.exports = connectDB;





