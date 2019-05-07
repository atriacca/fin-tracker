const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    income1: {
        type: String
    },
    income2: {
        type: String
    },
    income3: {
        type: String
    },
    mortgageOrRent: {
        type: String
    },
    electricity: {
        type: String
    },
    heatingOilOrGas: {
        type: String
    },
    internet: {
        type: String
    },
    cable: {
        type: String
    },
    water: {
        type: String
    },
    phone: {
        type: String
    },
    transportation: {
        type: String
    },
    insurance: {
        type: String
    },
    loans: {
        type: String
    },
    memberships: {
        type: String
    },
    groceries: {
        type: String
    },
    clothing: {
        type: String
    },
    education: {
        type: String
    },
    personalCare: {
        type: String
    },
    entertainment: {
        type: String
    },
    charities: {
        type: String
    },
    income1Amount: {
        type: String
    },
    income2Amount: {
        type: String
    },
    income3Amount: {
        type: String
    },
    mortgageOrRentAmount: {
        type: String
    },
    electricityAmount: {
        type: String
    },
    heatingOilOrGasAmount: {
        type: String
    },
    internetAmount: {
        type: String
    },
    cableAmount: {
        type: String
    },
    waterAmount: {
        type: String
    },
    phoneAmount: {
        type: String
    },
    transportationAmount: {
        type: String
    },
    insuranceAmount: {
        type: String
    },
    loansAmount: {
        type: String
    },
    membershipsAmount: {
        type: String
    },
    groceriesAmount: {
        type: String
    },
    clothingAmount: {
        type: String
    },
    educationAmount: {
        type: String
    },
    personalCareAmount: {
        type: String
    },
    entertainmentAmount: {
        type: String
    },
    charitiesAmount: {
        type: String
    },
    income1Date: {
        type: String
    },
    income2Date: {
        type: String
    },
    income3Date: {
        type: String
    },
    mortgageOrRentDate: {
        type: String
    },
    electricityDate: {
        type: String
    },
    heatingOilOrGasDate: {
        type: String
    },
    internetDate: {
        type: String
    },
    cableDate: {
        type: String
    },
    waterDate: {
        type: String
    },
    phoneDate: {
        type: String
    },
    transportationDate: {
        type: String
    },
    insuranceDate: {
        type: String
    },
    loansDate: {
        type: String
    },
    membershipsDate: {
        type: String
    },
    groceriesDate: {
        type: String
    },
    clothingDate: {
        type: String
    },
    educationDate: {
        type: String
    },
    personalCareDate: {
        type: String
    },
    entertainmentDate: {
        type: String
    },
    charitiesDate: {
        type: String
    }
})
                            // Model Name    // Model Blueprint
module.exports = mongoose.model("Expense", expenseSchema)