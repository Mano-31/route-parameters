const express = require("express");
const app = express();

app.get("/user/:name", (req,res) => {
  res.send(" welcome " + req.params.name);
});

app.listen(3000, () => {
    console.log("Dynamic route server running");
});