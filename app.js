var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
    res.json(["Welcome to Chacha Chaudharyy !!! You're on Dev Brnach"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});