const express = require("express");
const app = express();
require("dotenv").config()  // Creates .env file - add .env to .gitignore
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt"); // Gatekeeper/Security checkpoint
const PORT = process.env.PORT || 7000
// const PORT = process.env.PORT || 5000;

// Middlewares for every request 
app.use(express.json()) // req.body = Object from POST and PUT requests
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use("/api", expressJwt({ secret: process.env.SECRET }));

// Connect to mongoDB
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/expenses",
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

// Routes - Endpoints
app.use("/auth", require("../routes/authRouter"));
app.use("/api/expenses", require('../routes/expenseRouter'))
// app.use("/api/expenses", require("./routes/expenseRouter"));

// Global Server Error Handler - handles ANY thrown error from ANY of our routes above
app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message });
    // return res.status(500).send({ message: err.message })
});

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`);
});