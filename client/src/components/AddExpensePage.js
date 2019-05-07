import React, { Component } from 'react'
import AddExpenseForm from './AddExpenseForm.js'
// import { withExpenses } from '../context/ExpenseProvider.js'
// import { ExpenseList } from '../context/ExpenseList.js'

class AddExpensePage extends Component {
    constructor(){
        super()
        this.state = {
            fullName: "",
            username: "",
            expenseAmount: ""
        }
    }

    // handleChange = e => {
    //     const { name, value } = e.target
    //     this.setState({ [name]: value })
    // }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     this.props.addNewExpense(this.state)
    //     this.setState({ fullName: "", username: "", expenseAmount: "" })
    // }

    render(){
        return (
            <div>
                {/* <button onClick={() => this.props.history.goBack()}>Back</button> */}
                {/* <button onClick={getExpenses}>Get Expenses</button> */}
                <AddExpenseForm 
                    // {...this.state}
                    // handleChange={this.handleChange}
                    // handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

// export default withExpenses(AddExpensePage)
export default AddExpensePage