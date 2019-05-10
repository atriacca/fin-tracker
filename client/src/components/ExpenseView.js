import React, { Component } from 'react'
import Styles from './ExpenseView.module.css'
import { withContext } from "../AppContextProvider"

class ExpenseView extends Component {
    componentDidMount(){
        this.props.getExpenses()
    }

    render(){

        const mappedExpenses = this.props.expenses.map(expense => {
            return (
            <div className={Styles.secondReturnDiv}>
                <div>
                    <p>Income 1: {expense.income1Amount || "none"}</p>
                    <p>Due Date: {expense.income1Date || "none"} </p> 
                </div>
                <div>
                    <p>Income 2: {expense.income2Amount || "none"}</p>
                    <p>Due Date: {expense.income2Date || "none"} </p> 
                </div>
                <div>
                    <p>Income 3: {expense.income3Amount || "none"}</p>
                    <p>Due Date: {expense.income3Date || "none"} </p>
                </div> 
                <div>
                    <p>Mortgage/Rent: {expense.mortgageOrRent || "none"} </p>
                </div>
                <div>
                    <p>Electricity: {expense.electricity || "none"} </p>
                </div>
                <div>
                    <p>Heating/Oil/Natural Gas {expense.heatingOilOrGas || "none"} </p>
                </div>
                <div>
                    <p>Internet: {expense.internet || "none"} </p>
                </div>
                <div>
                    <p>Cable: {expense.cable || "none"} </p>
                </div>
                <div>
                    <p>Water: {expense.water || "none"}</p>
                </div>
                <div>
                    <p>Phone: {expense.phone || "none"}</p>
                </div>
                <div>
                    <p>Transportation: {expense.transportation || "none"}</p>
                </div>
                <div>
                    <p>Insurance: {expense.insurance || "none"}</p>
                </div>
                <div>
                    <p>Loans: {expense.loans || "none"}</p>
                </div>
                <div>
                    <p>Memberships: {expense.memberships || "none"}</p>
                </div>
                <div>
                    <p>Groceries: {expense.groceries || "none"} </p>
                </div>
                <div>
                    <p>Clothing: {expense.clothing || "none"}</p>
                </div>
                <div>
                    <p>Education: {expense.education || "none"}</p>
                </div>
                <div>
                    <p>Personal Care: {expense.personalCare || "none"} </p>
                </div>
                <div>
                    <p>Entertainment: {expense.entertainment || "none" }</p>
                </div>
                <div>
                    <p>Charities: {expense.charities || "none"}</p>
                </div>
            
                </div>
      )})

      return (
          <div className={Styles.expViewDiv}>
              {mappedExpenses}
          </div>
      )
  }
}
        
export default withContext(ExpenseView);
