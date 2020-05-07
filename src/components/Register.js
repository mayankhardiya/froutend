import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import NavBarManu from "./NavBarManu"
import NavbarOne from "./NavbarOne"
import axios from 'axios';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            mobile: null,
            username: null,
            password: null,
            nameError: "",
            datasuccess: ""
        }
    }

    valid() {
        if (this.state.name == null || this.state.name == "") {
            this.setState(
                { nameError: "Please Enter Name" }
            )
        } else if (this.state.mobile == null || this.state.mobile == "") {
            this.setState(
                { nameError: "Please Enter Mobile No" }
            )
        } else if (this.state.username == null || this.state.username == "") {
            this.setState(
                { nameError: "Please Enter Username" }
            )
        } else if (this.state.password == null || this.state.password == "") {
            this.setState(
                { nameError: "Please Enter Password" }
            )
        } else {
            return true
        }
    }

    create() {
        if (this.valid()) {

            const user = {
                name: this.state.name,
                mobile: this.state.mobile,
                username: this.state.username,
                password: this.state.password
            };

            axios.post("http://localhost:4001/users/Adduser", {
                name: user.name,
                mobile: user.mobile,
                username: user.username,
                password: user.password,
                status: '0'

            }).then((data) => {

                this.setState(
                    { datasuccess: "Admin Succesfully Added" }
                )

                this.resetFormFields()


            })

        }

    }

    resetFormFields() {
        this.setState(
            {
                name: '',
                mobile: '',
                username: '',
                password: ''
            });
    }

    keyPress = (event) => {
        this.setState(
            { datasuccess: "" }
        )
    }

    render() {
        return (
            <div className="container">
                <NavBarManu />
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <h2 className="h3 mb-3 font-weight-normal">Registraion</h2>
                        <p style={{ color: "red", fontSize: "14px" }}>{this.state.nameError}</p>
                        <p style={{ color: "green", fontSize: "14px" }}>{this.state.datasuccess}</p>
                        <input type="text" value={this.state.name} className="form-control" onKeyDown={this.keyPress} onChange={(event) => { this.setState({ name: event.target.value }) }}
                            placeholder="Enter Full Name" /> <br />
                        <input type="text" value={this.state.mobile} className="form-control" onChange={(event) => { this.setState({ mobile: event.target.value }) }}
                            placeholder="Enter Mobile Number" /> <br />
                        <input type="text" value={this.state.username} className="form-control" onChange={(event) => { this.setState({ username: event.target.value }) }}
                            placeholder="Enter Username" /> <br />
                        <input type="text" value={this.state.password} className="form-control" onChange={(event) => { this.setState({ password: event.target.value }) }}
                            placeholder="Enter Password" /> <br />
                        <button type="button" className="btn btn-success" onClick={() => { this.create() }}>Register</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;