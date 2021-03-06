import React, { Component } from 'react';
import { withContext } from "../AppContextProvider"

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/expenses"))
            .catch(err => {
                // this.setState({errorMessage: err.response.data.message})
            })
    }
/*
        .then(() => this.clearInputs())
        .catch(err => {
            this.setState({errorMessage: err.data})
        })
}
*/
    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="username"/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password"/>
                    <button type="submit">Submit</button>
                </form>
                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }
                {/* Please click here to sign up and create your own account. */}
{/* Please click <a render={() => <Redirect to="<MainView />">here</a> to sign up and create your own account. */}
            </div>
        )
    }
}

export default withContext(LoginForm);
/*
<a render={() => <Redirect to="<MainView />">here</a>
*/