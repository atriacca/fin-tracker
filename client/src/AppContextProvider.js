import React, { Component } from "react";
import axios from "axios";
const expenseAxios = axios.create();

expenseAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const AppContext = React.createContext();

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            expenses: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    componentDidMount() {
        this.getExpenses();
    }

    getExpenses = () => {
        return expenseAxios.get("/api/expenses")
            .then(response => {
                this.setState({ expenses: response.data });
                return response;
            })
    }

    addExpense = (newExpense) => {
        return expenseAxios.post("/api/expenses/", newExpense)
            .then(response => {
                this.setState(prevState => {
                    return { expenses: [...prevState.expenses, response.data] }
                });
                return response;
            })
    }

    editExpense = (expenseId, expense) => {
        return expenseAxios.put(`/api/expenses/${expenseId}`, expense)
            .then(response => {
                this.setState(prevState => {
                    const updatedExpenses = prevState.expenses.map(expense => {
                        return expense._id === response.data._id ? response.data : expense
                    })
                    return { expenses: updatedExpenses }
                })
                return response;
            })
    }

    deleteExpense = (expenseId) => {
        return expenseAxios.delete(`/api/expenses/${expenseId}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedExpenses = prevState.expenses.filter(expense => {
                        return expense._id !== expenseId
                    })
                    return { expenses: updatedExpenses }
                })
                return response;
            })
    }

    signup = (userInfo) => {
        return expenseAxios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response;
            })
    }

    login = (credentials) => {
        return expenseAxios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                this.getExpenses();
                return response;
            })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            expenses: [],
            user: {},
            token: ""
        })
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    getExpenses: this.getExpenses,
                    addExpense: this.addExpense,
                    editExpense: this.editExpense,
                    deleteExpense: this.deleteExpense,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    ...this.state
                }}
            >

                {this.props.children}

            </AppContext.Provider>
        )
    }
}

export const withContext = Component => {
    return props => {
        return (
            <AppContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
}