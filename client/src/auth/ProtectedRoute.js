import React from "react"
import { Route, Redirect } from "react-router-dom"
import { withContext } from "../AppContextProvider"

function ProtectedRoute(props) {
    const { component: Component, ...rest } = props;
    return (
        props.token ?
            <Route {...rest} component={Component} /> :
            <Redirect to="/" />
    )
}

export default withContext(ProtectedRoute)