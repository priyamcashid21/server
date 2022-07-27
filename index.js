const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const port = 4000;


app.use(express.json({limit :"50mb"}));
app.use(express.urlencoded({limit :"50mb", extended : false}));
app.use(logger("dev"));
app.use(cors());


app.get("/", (req,res) =>
{
    return res.send("Hello karan");
})


app.listen(port , (error) =>
{
    if(error)
    {
        console.log(`Server fail error is ${error}`);
    }
    else{
        console.log(`Server successfully Start port is ${port}`);
    }
})