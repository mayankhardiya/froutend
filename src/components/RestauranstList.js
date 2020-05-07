import React, { Component } from 'react';
import { Table, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavBarManu from "./NavBarManu"
import NavbarOne from "./NavbarOne"
import axios from 'axios';

class RestauranstList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        this.getData()
    }

    getData() {

        axios.get('http://localhost:4001/users/getuser').then((response) => {

            this.setState({ list: response.data })

        })
    }

    delete(id) {

        axios.get('http://localhost:4001/users/deleteuser/' + id).then((response) => {

            this.getData()

        })

    }

    render() {

        return (
            <Container>
                <NavbarOne />
                <h1>Data List</h1>
                {
                    this.state.list ?
                        <div class="table-responsive">
                            <Table>
                                <thead>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Mobile</th>
                                    <th>Members No</th>
                                    <th>Aadhaar No</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
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
                        : <p>Please Wait here</p>
                }
            </Container>
        );
    }
}

export default RestauranstList;
