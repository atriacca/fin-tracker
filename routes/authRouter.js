const express = require("express")
const User = require("../models/userSchema")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")

// Signup - POST
    // Does the username already exist
        // throw error ("That username already exists!")
    // create the new user and save in the db
    // send back the New user object, and a token
authRouter.post("/signup", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, existingUser) => {
        if (err) {
            res.status(500);
            return next(err);
            // Does the username already exist
        } else if (existingUser !== null) {
            res.status(400);
            return next(new Error("That username already exists!"))
        }
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) {
                res.status(500)
                return next(err)
            };
// Nate: const token = jwt.sign(user.toOject(), process.env.SECRET)
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.status(201).send({ user: user.withoutPassword(), token });
        });
    });
});

authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!user) {
            res.status(403);
            return next(new Error("Username or password are incorrect"));
        }
        user.checkPassword(req.body.password, (err, match) => {
            if (err) {
                res.status(500)
                return next(err)
            };
            if (!match) res.status(401).send({ message: "Username or password are incorrect" });
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.send({ user: user.withoutPassword(), token })
        });
    });
})

module.exports = authRouter;