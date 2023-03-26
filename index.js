const express = require("express"); // import express library
const cors = require("cors");
const app = express(); // create an object of express having name app
const port = process.env.PORT || 3000;
const apiData = require("./data.json"); // using json data

app.use(cors());

//for reading
app.get("/", (req, res) => {
    res.send("Hello! Welcome to My API");
});

app.get("/data", (req, res) => {
    res.send(apiData);
});

app.listen(port, () => {
    console.log("Hi! I'm live");
});