import React from 'react';
import { Route, Switch, Link, Redirect } from "react-router-dom";
// import Header from './Header';
// import Navbar from './Navbar';
import View from './View';
// import Footer from './Footer';
// import Entry from './Entry';
import Styles from './App.module.css';
import MainView from './MainView';
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Auth from "./auth/Auth";
import { withContext } from "./AppContext"
import ProtectedRoute from "./auth/ProtectedRoute";
import ExpenseList from './components/ExpenseList';

function App(props) {
    return (
        <div>
            {/* <div className="app-wrapper">
                <Signup />
            </div>
            <nav className="login-wrapper">
            {
                !props.token ?
                <>
                        <div>
                            <Link to="/signup">Sign Up</Link><br></br>
                            <Link render={() => !props.token ? <Login /> : <View />}>Sign Up!</Link><br></br>
                            <Link to="/login">Log In</Link>
                        </div>
                    </>
                :
                <>
                        <div>
                            <Link to="/Expenses">Expenses</Link>
                            <button onClick={() => props.logout()}>Logout</button>
                        </div>
                    </>
            }
            </nav> */}
                <Switch>
                    {/* <Route className={Styles.viewDiv} View/> */}
                    <Route exact path={"/"} render={() => !props.token ? <Auth /> : <Redirect to="/expenses"/>} />
                    {/* <Route path="/signup" component={Signup}/> */}
                    {/* <Route path="/login" component={Login}/> */}
                    <ProtectedRoute path="/expenses" component={MainView}/>
                    {/* <ProtectedRoute path="/expenses" component={ExpenseList}/> */}
                </Switch>
                {/* <MainView /> */}
        </div>
    )
}

export default withContext(App);

{/* 

`<Route exact path={"/"} render={() => !props.token ? <Login page /> : <Redirect />} />`
`<Route exact path={"/"} render={() => !props.token ? <Login page /> : <View />} />`
                    

                <Switch>
                    <Signup />
                    <Login />
                    <ExpenseList />
                    <Route exact path="/" render={() => !token ? <Login page /> : <Redirect to="/expenses"/>}/>
                </Switch>

*/}