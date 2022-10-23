//allows for envirnment variables
require("dotenv").config();
const display = require("./displayMessage")
console.clear()
display.loading("starting server . . .")
const express = require("express")
//lets you see the body data when data is posted
const bp = require("body-parser")
let port = 5000;



//for using a mongoose database
//const mongoose = require("mongoose");

const app = express();

//sets up middleware of body data viewing
app.use(bp.urlencoded({extended: false}))

//for connecting to a database
//mongoose.connect( "database url")

//for showing static files
//app.use(express.static("asset folder"))

//for using ejs to display server info on frontend 
//app.set('view engine', 'ejs');

app.route("/")
    .get((req, res) => {
        res.json({status: "it works!!!"})
    })

app.listen(5000, () => {
    display.stopLoading("server succesfully started \n")
    display.endMessage(port)
    
})