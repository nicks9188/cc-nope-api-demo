var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
    res.json(["Chacha Chaudharyy Welcomes You on => feature-2 !!!"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});