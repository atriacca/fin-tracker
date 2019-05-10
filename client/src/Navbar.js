import React from 'react'
import Styles from './Navbar.module.css'
import { withContext } from "./AppContextProvider"

function Navbar(props) {
    return (
        <div className={Styles.navDiv}>
             {/* here I would like to create a place for the user to be displayed */}
             {/* I'll have to get  */}

            <button>New Expense</button>
            <button>View Expenses</button>
            <button onClick={() => props.logout()}>Logout</button>
        </div>
    )
}

export default withContext(Navbar)
