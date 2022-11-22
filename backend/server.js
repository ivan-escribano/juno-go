require("dotenv").config();
const express = require("express");
//!JS SDK PARSE
const Parse = require('parse/node');
Parse.initialize(process.env.PARSE_SERVER_APPLICATION_ID, "unused", process.env.PARSE_SERVER_MASTER_KEY);
Parse.serverURL = process.env.PARSE_SERVER_URL;
const app = express();

//!MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded());

const { api, dashboard } = require("./services/parseServer");

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);
//Access to parse dashboard
app.use("/dashboard", dashboard);

app.get("/", (req, res, next) => {
    res.send("hello bitches");
})


app.listen(process.env.PORT, function () {
    console.log('parse-server-example running on port.: ' + process.env.PORT);
});