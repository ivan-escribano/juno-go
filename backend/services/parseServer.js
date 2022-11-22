require("dotenv").config();


const ParseServer = require("parse-server").ParseServer;
const ParseDashboard = require('parse-dashboard');
const api = new ParseServer({
    databaseURI: process.env.PARSE_SERVER_DATABASE_URI, // Connection string for your MongoDB database
    appId: process.env.PARSE_SERVER_APPLICATION_ID,
    masterKey: process.env.PARSE_SERVER_MASTER_KEY, // Keep this key secret!
    serverURL: process.env.PARSE_SERVER_URL// Don't forget to change to https if needed
});

//Parse dashboard config
const dashboard = new ParseDashboard({
    "apps": [
        {
            "serverURL": process.env.PARSE_SERVER_URL,
            "appId": process.env.PARSE_SERVER_APPLICATION_ID,
            "masterKey": process.env.PARSE_SERVER_MASTER_KEY,
            "appName": "juno-go",
        }
    ]
});

module.exports = {
    api, dashboard
}