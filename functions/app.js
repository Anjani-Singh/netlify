const express = require("express");
const serverless = require("serverless-http");
const app = express();
const path = require("path");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("Welcome to Mobupps product management portal...");
// });

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Serve static files (HTML, CSS, JS) from the "public" directory
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use("/.netlify/functions/app", router);

module.exports.handler = serverless(app);
