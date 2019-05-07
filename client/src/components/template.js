const express = require('express')
const expenseRouter = express.Router()
const Expense = require('../models/expenseSchema.js')

// Mongoose query methods
    // .findOneAndRemove()
    // .findOneAndUpdate()
    // .save()
    // .find()
    // .findOne()

// GET ALL - 
expenseRouter.get("/", (req , res, next) => {
    // .find is a get ALL method,
    // returns an array of the collection
    Expense.find((err, expenses) => {
        if(err){
            res.status(500)
            return next(err)
        }
            return res.status(200).send()
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
    // create new Object using the character Schema
    const newExpense = new Expense(req.body)
    // Set the user property of an expense to req.user._id (logged-in user's `_id` property)
    newExpense.user = req.user._id;
    // .save() saves a new object to the DB collection
    newExpense.save((err, newSavedExpense) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedExpense)
    })
})

// GET ONE
expenseRouter.get("/:_id", (req, res, next) => {
    Expense.findOne({_id: req.params._id}, (err, expense) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(character)
    })
})

// DELETE ONE - DELETE
expenseRouter.delete("/:_id", (req, res, next) => {
    Expense.findOneAndRemove({_id: req.params._id}, (err, deletedExpense) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(deletedExpense)
    })
})

// UPDATE ONE - PUT
expenseRouter.put("/:_id", (req, res, next) => {
    Expense.findOneAndUpdate(
        {_id: req.params._id},      // Find character by _id
        req.body,                   // Update character with this object
        {new: true},                // Send back the new character after update
        (err, updatedExpense) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedExpense)
    })
})

module.exports = expenseRouter