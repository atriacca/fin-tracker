import React from 'react';
import { Link } from "react-router-dom";
import { withContext } from "./AppContext"

function SignInPage(props) {
    return (
        <nav className="login-wrapper">
            <div className="nav-link">
                <Link to="/signup">Sign Up</Link>
            </div>
            <div className="nav-link">
                <Link to="/login">Log In</Link>
            </div>
            <div className="nav-link">
                <Link to="/expenses">Expenses - TO BE DELETED or MOVED TO NAVBAR</Link>
            </div>
            <div className="nav-link">
                <button onClick={() => props.logout()}>Logout - TO BE MOVED TO NAVBAR</button>
            </div>
        </nav>
    )
}
// function SignInPage(props) {
//     return (
//         <nav className="login-wrapper">

//             {
//                 !props.token ?
//                     <React.Fragment>
//                         <div className="nav-link">
//                             <Link to="/signup">Sign Up</Link>
//                         </div>

//                         <div className="nav-link">
//                             <Link to="/login">Log In</Link>
//                         </div>

//                     </React.Fragment>
//                 :
//                     <React.Fragment>
//                         <div className="nav-link">
//                             <Link to="/Expenses">Expenses</Link>
//                         </div>

//                         <div className="nav-link">
//                             <Link to="/profile">Profile</Link>
//                         </div>

//                         <div className="nav-link">
//                             <button onClick={() => props.logout()}>Logout</button>
//                         </div>
//                     </React.Fragment>
//             }
//         </nav>
//     )
// }
export default withContext(SignInPage);