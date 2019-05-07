const express = require('express')
const expenseRouter = express.Router()
const Expense = require('../models/expenseSchema')

// Mongoose query methods
    // .findOneAndRemove()
    // .findOneAndUpdate()
    // .save()
    // .find()
    // .findOne()

// GET ALL - 
expenseRouter.get("/", (req , res, next) => {
// .find is a get ALL method, returns an array of the collection
// Addition: include filtering criteria to the find so that it only finds expense items with a 'user' property with the current user's id.
    Expense.find({user: req.user._id}, (err, expenses) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(expenses)
//      return res.status(200).send()
    })
})

// GET ALL - with async - await
// expenseRouter.get("/", async (req, res, next) => {
//     try {
//         const expenses = await Expense.find()
//         return res.status(200).send(expenses)
//     }
//     catch(err){
//         res.status(500)
//         return next(err)
//     }
// })

// POST One
expenseRouter.post("/", (req, res, next) => {
    // create new Object using the expense Schema
    // Add user ID to the object
    req.body.user = req.user._id
    const expense = new Expense(req.body)
    // Set the user property of an expense to req.user._id (logged-in user's `_id` property)
    // Addition: include the user property to this new Expense item
    // .save() saves a new object to the DB collection
    expense.save(function (err, newExpense) {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newExpense)
    })
})

// GET ONE
expenseRouter.get("/:expenseId", (req, res, next) => {
    // Addition: Change to findOne and include the search criteria for users
    Expense.findOne({_id: req.params.expenseId, user: req.user._id}, (err, expense) => {
        if(err){
            res.status(500)
            return next(err)
        } else if (!expense) {
            res.status(404)
            return next(new Error("No expense item found."))
        }
        return res.status(200).send(expense)
        // return res.send(expense) per token-auth exercise
 
    })
})

// DELETE ONE - DELETE
expenseRouter.delete("/:expenseId", (req, res, next) => {
    Expense.findOneAndRemove({_id: req.params.expenseId, user: req.user._id}, (err, deletedExpense) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(deletedExpense)
        // return res.send(deletedExpense) per token-auth exercise
    })
})

// UPDATE ONE - PUT
expenseRouter.put("/:expenseId", (req, res, next) => {
    // Addition: Change to findOneAndUpdate and include the query for users
    Expense.findOneAndUpdate(
        // Updated query to include user
        {_id: req.params.expenseId, user: req.user._id},// Find character by _id
        req.body, // Update character with this object
        {new: true}, // Send back the new character after update
        (err, updatedExpense) => {
            if(err){
                console.log("Error")
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedExpense)
            // return res.send(todo) per token-auth exercise
    })
})

module.exports = expenseRouter