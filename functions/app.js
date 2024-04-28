const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to Mobupps product management portal...");
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);
