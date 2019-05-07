import React from 'react';
import { Link } from "react-router-dom";
import { withContext } from "./AppContext"


function Navbar(props) {
    return (
        <nav className="login-wrapper">

            {
                !props.token ?
                    <>
                        <div>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                        <div>
                            <Link to="/login">Log In</Link>
                        </div>
                    </>
                :
                    <>
                        <div>
                            <Link to="/Expenses">Expenses</Link>
                        </div>
                        {/* <div>
                            <Link to="/profile">Profile</Link>
                        </div> */}
                        <div>
                            <button onClick={() => props.logout()}>Logout</button>
                        </div>
                    </>
            }
        </nav>
    )
}
export default withContext(Navbar);