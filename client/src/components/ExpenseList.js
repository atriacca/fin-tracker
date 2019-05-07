import React, { Component } from 'react'
import Expense from './Expense.js'
import AddUserForm from './AddUserForm.js'
import SignInForm from './SignInForm.js'
import AddExpenseForm from './AddExpenseForm.js'
import { withContext } from '../AppContext'
// import { withExpenses } from '../context/ExpenseProvider.js'

// // Model I'm using to build state with the class below
// const ExpenseList = (props) => {
//     const { getExpenses, expenses, history } = props
//     return (
//         <div className="container">
//             <AddExpenseForm /><br></br>
//             <button onClick={getExpenses}>Get Financial Report</button>
//             <button onClick={() => history.push("/addExpense")}>Add New Expense/Income</button><br></br><br></br>
//             {/* { expenses.map(expense => <Expense key={expense._id} {...expense}/>)}  */}
//         </div>
//     )
// }

class ExpenseList extends Component {
    constructor(){
        super()
        this.state = {
            fullName: "", 
            username: "", 
            mortgageOrRent: false, 
            mortgageOrRentAmount: "", 
            mortgageOrRentDate: "", 
            heatingOilOrGas: false, 
            oil: "",
            oilAmount: "",
            cable: false,
            internet: false,
            water: false,
            phone: false,
            electricity: false,
            electricityAmount: "", 
            electricityDate: "", 
            transportation: false,
            transportationAmount: "", 
            transportationDate: "", 
            insurance: false,
            insuranceAmount: "", 
            insuranceDate: "", 
            loans: false,
            loansAmount: "", 
            loansDate: "", 
            memeberships: false,
            membershipsAmount: "", 
            membershipsDate: "", 
            groceries: false,
            groceriesAmount: "", 
            groceriesDate: "", 
            clothing: false,
            clothingAmount: "", 
            clothingDate: "", 
            education: false,
            educationAmount: "", 
            educationDate: "", 
            personalCare: false,
            personalCareAmount: "", 
            personalCareDate: "",  
            entertainment: false,
            entertainmentAmount: "", 
            entertainmentDate: "", 
            charities: false,
            charitiesAmount: "", 
            charitiesDate: "", 
            income1: false, 
            income1Amount: "", 
            income1Date: "", 
            income2: false, 
            income2Amount: "", 
            income2Date: "", 
            income3: false, 
            income3Amount: "", 
            income3Date: ""
            
        }
    }
    // Need handleChange and handleSubmit - (w/ prevent default)

    handleChange = (e) => {
        const {name} = e.target
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addExpense(this.state)

    }

    render(){
        console.log(this.props)
        return(
            <div>
                <AddExpenseForm 
                    handleSubmit = {this.handleSubmit}
                    handleChange = {this.handleChange}
                    {...this.state}
                />
            </div>
        )
    }

}
console.log(ExpenseList)


// export default withExpenses(ExpenseList)
export default withContext(ExpenseList)