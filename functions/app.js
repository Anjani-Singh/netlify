const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const fs = require('fs')

const app = express();


const htmlPath = path.join(__dirname, "../public/index.html");

app.get("/.netlify/functions/app", (req, res) => {
    fs.readFile(htmlPath, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error reading HTML file");
        }
        res.setHeader("Content-Type", "text/html");
        res.send(data);
    });
});


// const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("Welcome to Mobupps product management portal...");
// });

// const publicPath = path.resolve(__dirname, "../public");

// app.use(express.static(publicPath));

// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public", "index.html"));
// });

// app.use("/.netlify/functions/app", router);

module.exports.handler = serverless(app);
