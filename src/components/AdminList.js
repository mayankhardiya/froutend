import React, { Component } from 'react';
import { Table, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBarManu from "./NavBarManu"
import NavbarOne from "./NavbarOne"

class AdminList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
            isChecked: true,
            isCheckedone: null
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        axios.get('http://localhost:4001/users/getadmin').then((response) => {

            // console.log(response.data);

            this.setState({ list: response.data })

        })
    }

    boxuncheck(id) {

        this.setState({ isChecked: null })

        axios.post('http://localhost:4001/users/unupdateId', { id: id }).then((response) => {

        })


    }

    boxcheck(id) {

        axios.post('http://localhost:4001/users/updateId', { id: id }).then((response) => {

        })

    }


    render() {
        return (
            <Container>
                <NavbarOne />
                <h1>Admin Panel</h1>
                {
                    this.state.list ?
                        <div class="table-responsive">
                            <Table>
                                <thead>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Mobile No</th>
                                    <th>Access</th>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr>
                                                <td>{i}</td>
                                                <td>{item.name}</td>
                                                <td>{item.username}</td>
                                                <td>{item.password}</td>
                                                <td>{item.mobile}</td>
                                                {
                                                    item.status == '1' ? <td><input value={item._id} type="checkbox" checked={this.state.isChecked}
                                                        onClick={() => this.boxuncheck(item._id)} />
                                                    </td> : <td><input value={item._id} type="checkbox" checked={this.state.isCheckedone}
                                                        onClick={() => this.boxcheck(item._id)} />
                                                        </td>
                                                }


                                                {/* <td><input value={item._id} type="checkbox" checked={this.state.isChecked}
                                                    onClick={() => this.boxcheck(item._id)} /></td> */}

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait</p>
                }
            </Container>
        );
    }
}

export default AdminList;
