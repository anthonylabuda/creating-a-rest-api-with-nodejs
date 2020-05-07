const express = require("express");

const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        "success": true,
        "message": "RESTful API is online!"
    });
});

module.exports = app;
