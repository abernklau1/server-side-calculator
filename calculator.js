const express = require("express");
const bodyParser = require("body-parser");
const req = require("express/lib/request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


// Simple addition calculator page

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = String(num1 + num2);

    res.send(result);
})

// BMI Calculator page

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let result = weight / (height * height);

    res.send("Your BMI is " + result);
})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});