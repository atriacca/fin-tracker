import React from 'react';
// import { Route, Switch, Link, Redirect } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
// import MainView from '../MainView';
// import ProtectedRoute from "./ProtectedRoute";
// import ExpenseList from '../components/ExpenseList';

function Auth() {
    return (
        <div>
            <Login />
            <Signup />
        </div>
    )
}

export default Auth
/*
<div className="app-wrapper">
    <Signup />
</div>
<nav className="login-wrapper">
*/