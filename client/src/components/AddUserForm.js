import React from 'react'
// import { Link } from "react-router-dom";
// import { withContext } from "./AppContext"

function AddUserForm(props) {
// const AddUserForm = props => {
    const { handleChange, handleSubmit, fullName, username, password } = props
    return (
        <form onSubmit={handleSubmit}>
            <h1>Create New User</h1>
            <input type="text" name="fullName" value={fullName} placeholder= "Full name" onChange={handleChange}/><br></br>
            <input type="text" name="username" value={username} placeholder= "Username"  onChange={handleChange}/><br></br>
            <input type="password" name="password" value={password} placeholder= "Password" onChange={handleChange}/><br></br>
            <button>Create User Account</button>
        </form>
    )
}

// export default withContext(AddUserForm);
export default AddUserForm