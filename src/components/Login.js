import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBarManu from "./NavBarManu";
import axios from 'axios';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            nameError: ""
        }
    }

    valid() {

        if (this.state.username == "" && this.state.password == "") {
            this.setState(
                { nameError: "Username & Password Empty" }
            )
        } else if (this.state.password == "") {
            this.setState(
                { nameError: "Password Empty" }
            )
        } else if (this.state.username == "") {
            this.setState(
                { nameError: "Username Empty" }
            )
        } else {

            return true
        }
    }

    login() {

        if (this.valid()) {

            const user = {
                username: this.state.username,
                password: this.state.password
            };

            axios.post("http://localhost:4001/users/loginuser", { username: user.username, password: user.password }).then((data) => {

                if (data.data.message) {
                    this.setState(
                        { nameError: data.data.message }
                    )
                }

                if (data.data.name) {

                    localStorage.setItem('login', data.data.name)

                    console.warn(this.props.history.push('list'))

                } else {


                }

            })

        } else {



        }
    }


    render() {
        return (
            <div className="container">
                <NavBarManu />
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <h2 className="font-weight-normal">Login</h2>
                        <p style={{ color: "red", fontSize: "14px" }}>{this.state.nameError}</p>
                        <label htmlFor="email">USERNAME - </label>
                        <input type="text" placeholder="Enter Username" value={this.state.username} name="name" onChange={(event) => this.setState({ username: event.target.value })} /><br /><br />
                        <label htmlFor="password">PASSWORD - </label>
                        <input type="password" placeholder="Enter Password" value={this.state.password} name="password" onChange={(event) => this.setState({ password: event.target.value })} /><br /><br />
                        <button className="btn btn-success" onClick={() => { this.login() }}>Login</button>
                    </div>
                </div>
            </div >
        )
    }
}
