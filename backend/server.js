require("dotenv").config();
const express = require("express");
//!JS SDK PARSE
const Parse = require('parse/node');
Parse.initialize(process.env.PARSE_SERVER_APPLICATION_ID, "unused", process.env.PARSE_SERVER_MASTER_KEY);
Parse.serverURL = process.env.PARSE_SERVER_URL;
const app = express();
const cors = require("cors");
//!MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

const { api, dashboard } = require("./services/parseServer");

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);
//Access to parse dashboard
app.use("/dashboard", dashboard);



//LOGIN
app.post("/login", async (req, res, next) => {
    const { username, password } = req.body;
    try {
        await Parse.User.logIn(username, password);
        res.status(200).send("Login successful");
    } catch (error) {
        res.status(400).send(error)
    }
})
//SIGNUP
app.post("/signup", async (req, res, next) => {
    const { username, password } = req.body;
    const user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    try {
        const test = await user.signUp();
        res.status(200).send("Register successful");
    } catch (error) {
        res.status(400).send("Error" + error);

    }
});


app.listen(process.env.PORT, function () {
    console.log('parse-server-example running on port.: ' + process.env.PORT);
});