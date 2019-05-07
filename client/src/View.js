import React from 'react'
import Styles from './View.module.css'
import ExpenseView from './components/ExpenseView'

function View() {
    return (
        <div className={Styles.mainViewDiv}>
            <ExpenseView />
        </div>
    )
}

export default View
