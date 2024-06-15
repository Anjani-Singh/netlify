const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const fs = require("fs");

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

app.get("/.netlify/bithday/wishes", (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Happy Birthday!</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                background-color: #f8f9fa;
                color: #343a40;
            }
            .container {
                margin-top: 50px;
            }
            .birthday-message {
                font-size: 24px;
                margin: 20px 0;
            }
            .birthday-image {
                width: 300px;
                border-radius: 15px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .button {
                margin-top: 20px;
                padding: 10px 20px;
                font-size: 18px;
                background-color: #28a745;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            .button:hover {
                background-color: #218838;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Happy Birthday!</h1>
            <img src="birth.jpg" alt="Birthday Cake" class="birthday-image">
            <p class="birthday-message">Wishing you all the happiness, health, and success in the year ahead. Have a fantastic birthday!</p>
            <button class="button" onclick="alert('Happy Birthday!')">Send Wishes</button>
        </div>
    </body>
    </html>
    `;

  res.setHeader("Content-Type", "text/html");
  res.send(htmlContent);
});

module.exports.handler = serverless(app);
