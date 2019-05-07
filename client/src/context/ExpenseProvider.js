import React, { Component } from 'react'
import axios from 'axios'

const ExpenseContext = React.createContext()
// Provider,  Consumer

export default class ExpenseProvider extends Component{
    constructor(){
        super()
        this.state = {
            expenses: []
        }
    }
 
    getExpenses = () => {
        axios.get("/expenses")
            .then(res => {
                this.setState({ expenses: res.data })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    addNewExpense = newExpense => {
        axios.post("/expenses", newExpense)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.response.data.errMsg))
        }

    removeOldExpense = _id => {
        axios.put("/expenses/", {living: false})
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

   render(){
       return (
           <ExpenseContext.Provider
           value={{
               ...this.state,
               removeOldExpense: this.removeOldExpense,
               getExpenses: this.getExpenses,
               addNewExpense: this.addNewExpense
            }}>
                { this.props.children }
            </ExpenseContext.Provider>
        )
    }
}

export const withExpenses = C => props => (
    <ExpenseContext.Consumer>
        {value => <C {...value} {...props}/>}
    </ExpenseContext.Consumer>
)
