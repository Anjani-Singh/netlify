const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const fs = require('fs')

const app = express();

app.get("/.netlify/functions/app", (req, res) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Mobupps Product Management Portal</title>
            <style>
                /* Your CSS styles here */
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to <span style="color: red;">Mobupps</span> Product Management Portal</h1>
                <p>This is a portal for managing <strong>Mobupps</strong> products.</p>
                <button class="btn">Get Started</button>
            </div>
        </body>
        </html>
    `;
    
    res.setHeader("Content-Type", "text/html");
    res.send(htmlContent);
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
