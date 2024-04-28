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
            body {
                font-family: Arial, sans-serif;
                background-color: #ff8c00;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
    
            .container {
                text-align: center;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                padding: 40px;
            }
    
            h1 {
                color: #333;
                font-size: 28px;
                margin-bottom: 20px;
                text-transform: uppercase;
            }
    
            p {
                color: #666;
                font-size: 18px;
            }
    
            .product-image {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .btn {
                background-color: #007bff;
                color: #fff;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
    
            .btn:hover {
                background-color: #0056b3;
            }
    
            .red-text {
                color: #ff0000; 
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to <span class="red-text">Mobupps</span> Product Management Portal</h1>
            <p>This is a portal for managing <span style="font-weight: bold;">Mobupps</span> products.</p>
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
