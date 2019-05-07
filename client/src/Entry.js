import React from 'react'
import Styles from './Entry.module.css'
import ExpenseList from './components/ExpenseList.js'

function Entry() {
    return (
        <div className={Styles.entryDiv}>
                  <ExpenseList />

        </div>
    )
}

export default Entry
