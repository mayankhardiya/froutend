import React, { Component } from 'react'
import { Table, Form, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavBarManu from "./NavBarManu"
import NavbarOne from "./NavbarOne"
import axios from 'axios';

class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData: false,
            lastSearch: ""
        }
    }
    search(key) {
        this.setState({ lastSearch: key })
        axios.get("http://localhost:4001/users/search/" + key).then((response) => {

            if (response.data.length > 0) {
                this.setState({ searchData: response.data, noData: false })
            } else {
                this.setState({ noData: true, searchData: null })
            }
        })
    }

    delete(id) {

        axios.get('http://localhost:4001/users/deleteuser/' + id).then((response) => {

            this.setState({ noData: true, searchData: null })

        })

    }

    render() {
        return (
            <Container>
                <NavbarOne />
                <h1>Data Search</h1>
                <Form.Control type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search here" />
                <div>
                    {
                        this.state.searchData ?
                            <div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Mobile</th>
                                            <th>Members No</th>
                                            <th>Aadhaar No</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.searchData.map((item, i) =>
                                                <tr>
                                                    <td>{i}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.mobile}</td>
                                                    <td>{item.family}</td>
                                                    <td>{item.aadhar}</td>
                                                    <td><Link to={"/update/" + item._id}><FontAwesomeIcon icon={faEdit} color="orange" /></Link></td>
                                                    <td><Link onClick={() => this.delete(item._id)}><FontAwesomeIcon icon={faTrash} color="Red" /></Link></td>

                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            : ""
                    }
                    {
                        this.state.noData ? <h3>No Data Found</h3> : null
                    }
                </div>
            </Container >
        )
    }
}

export default RestaurantSearch;