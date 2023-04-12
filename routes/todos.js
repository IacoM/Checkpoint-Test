const express = require("express");
const app = express.Router();

app.post("/", (req, res) => {
    const body = req.body;
    console.log(body);
    res.status(201).json({message: "created"});
});

module.exports = app;