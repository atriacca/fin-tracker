import React, { Component } from 'react'
import AddExpenseForm from './AddExpenseForm.js'
import AddUserForm from './AddUserForm.js'
import Styles from './Expense.module.css'
// import { withExpenses } from '../context/ExpenseProvider.js'

class Expense extends Component {
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            fullName: this.props.fullName,
            username: this.props.username,
            expenseAmount: this.props.expenseAmount
        }
    }

    render(){
    const { fullName, username, expenseAmount, deleteExpense, _id, handleSubmit } = this.props 
    // let bgColor, textDec, bdImage, fWeight, fontColor, btnColor

    // handleChange = e => {
    //     const { name, value } = e.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     const updates = {
    //         fullName: this.props.fullName,
    //         username: this.props.username,
    //         expenseAmount: this.props.expenseAmount
    //     }

    //     this.props.editExpense(this.props._id, updates)
    //     this.toggler()
    // }
    // handleSubmit = e => {
    //     e.preventDefault()
    //     const updates = {
    //         fullName: this.props.fullName,
    //         username: this.props.username,
    //         expenseAmount: this.props.expenseAmount
    //     }

    //     this.props.editExpense(this.props._id, updates)

    // }
    
    const styles = {
        // textDecorationLine: textDec,
        // backgroundImage: bdImage,
        // fontWeight: fWeight,
        // backgroundColor: bgColor,
        // color: fontColor,
        backgroundSize: "100%"
    }
        return (
        <div className={Styles.container}>
            <div style={styles}>
                {/* syntax for declaring fragments, looks like empty tags but acts as div but without changing parent/chid relationship  */}
            {/* { this.state.editToggle ?
                <>
                    <AddExpenseForm 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        fullName={this.state.fullName}
                        username={this.state.username}
                        expenseAmount={this.state.expenseAmount}
                        btnText="Edit Expense"                    />
                        <button onClick={this.toggler}>Close</button>
                </>
            :
                <> */}
                    <h1>{fullName}</h1>
                    <p>Username: {username}</p>
                    <p>Expense Amount: {expenseAmount}</p>
                    <button onClick={() => deleteExpense(_id)}>Delete</button>
                        <button onClick={this.toggler}>Edit</button>
                {/* </> */}
            </div>
        </div>
        )
    }
}

export default Expense