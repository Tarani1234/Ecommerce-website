const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');


mongoose.connect("mongodb+srv://taraniyadav0309:Tarani1234@cluster0.bys9iv2.mongodb.net/ ECOMMERECE_WEBSITE")
 .then(()=> console.log("monodb is connected"))
   .catch((error) => console.log(error))


const app  = express();

app.use( cors({
    origin : 'http://localhost:5173/',
    methods : ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders : [
        "content-Type",
        "Authorization",
        "Cache-control",
        'Expires',
        'Pragram'
    ],
    credentials : true
}))
app.use(cookieParser());
app.use(express.json());


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`server is running on the port ${PORT}`))
