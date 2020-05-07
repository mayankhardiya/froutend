import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import NavBarManu from "./NavBarManu"
import NavbarOne from "./NavbarOne"

import axios from 'axios'

class RestaurantUpdate extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            address: null,
            family: null,
            mobile: null,
            aadhar: null,
            datasuccess: ""
        }
    }

    componentDidMount() {

        axios.get('http://localhost:4001/users/udpateuser/' + this.props.match.params.id).then((response) => {


            this.setState({
                id: response.data[0]._id,
                name: response.data[0].name,
                address: response.data[0].address,
                family: response.data[0].family,
                mobile: response.data[0].mobile,
                aadhar: response.data[0].aadhar
            })
        })
    }

    update() {

        var createone = localStorage.getItem('login')

        const user = {
            id: this.state.id,
            name: this.state.name,
            family: this.state.family,
            address: this.state.address,
            mobile: this.state.mobile,
            aadhar: this.state.aadhar,
            createtwo: createone,
        };
        axios.post('http://localhost:4001/users/userUpdate', {
            id: user.id,
            name: user.name,
            family: user.family,
            address: user.address,
            mobile: user.mobile,
            aadhar: user.aadhar,
            create: user.createtwo,
        }).then((data) => {

            if (data.data.message) {
                this.setState(
                    { datasuccess: data.data.message }
                )
            }

        })

    }

    render() {
        return (
            <div className="container">
                <NavbarOne />
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">

                        <h2 className="h3 mb-3 font-weight-normal">Update Data Here</h2>
                        <p style={{ color: "green", fontSize: "14px" }}>{this.state.datasuccess}</p>
                        <input type="hidden" className="form-control" value={this.state.id} />
                        <input type="text" className="form-control" onChange={(event) => { this.setState({ name: event.target.value }) }}
                            placeholder="Enter Full Name" value={this.state.name} /> <br />
                        <input type="text" className="form-control" onChange={(event) => { this.setState({ address: event.target.value }) }}
                            placeholder="Enter Address" value={this.state.address} /> <br />
                        <input type="text" className="form-control" onChange={(event) => { this.setState({ mobile: event.target.value }) }}
                            placeholder="Enter Mobile No" value={this.state.mobile} /> <br />
                        <input type="text" className="form-control" onChange={(event) => { this.setState({ family: event.target.value }) }}
                            placeholder="Enter Family No" value={this.state.family} /> <br />
                        <input type="text" className="form-control" onChange={(event) => { this.setState({ aadhar: event.target.value }) }}
                            placeholder="Enter Addhar No" value={this.state.aadhar} /> <br />
                        <button className="btn btn-success" onClick={() => { this.update() }}>Update Data</button>


                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;
