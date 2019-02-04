import React, { Component } from 'react';

import { Button } from 'reactstrap'

//CSS
import './AddressCrud.css'

//Components
import { Form } from '../Form/Form';
import Toggle from '../Toggle/Toggle';

export class AddressCrud extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [{}]
        }
    }

    addUser = (firstName, lastName, email, country, img) => {
        this.setState(previousState => ({
            users: [...previousState.users, { firstName, lastName, email, country, img }]
        }))
    }

    updateUser = (key, first, last, mail, country, img) => {
        let usersArray = JSON.parse(localStorage.getItem('Contacts'))

        usersArray.splice(key, 1, { firstName: first, lastName: last, email: mail, country: country, img: img })

        localStorage.setItem('Contacts', JSON.stringify(usersArray));

        //setState again to prevent refresh
        this.setState({ users: JSON.parse(localStorage.getItem('Contacts')) })
    }

    deleteUser(key) {

        // Get data, parse JSON, splice and set again without the target.
        let usersArray = JSON.parse(localStorage.getItem('Contacts'))
        usersArray.splice(key, 1)
        localStorage.setItem('Contacts', JSON.stringify(usersArray));

        //setState again to prevent refresh
        this.setState({ users: JSON.parse(localStorage.getItem('Contacts')) })
    }

    componentWillMount() {
        //Receive from localStorage
        localStorage.getItem('Contacts') && this.setState({
            users: JSON.parse(localStorage.getItem('Contacts'))
        })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Contacts', JSON.stringify(nextState.users))
    }

    render() {
        return (
            <div>
                <Form addUser={this.addUser} />
                <hr />
                <h6>USERS:</h6>
                <ul>
                    {this.state.users.map((user, index) =>
                        <div key={index} id={user.email}>
                            <img src={user.img} alt={user.firstName}></img>
                            <h6>NAME: {user.firstName}</h6>
                            <li>LAST NAME: {user.lastName}</li>
                            <li>EMAIL: {user.email}</li>
                            <li>COUNTRY: {user.country}</li>
                            <div className="row">
                                <div>
                                    <Button
                                        color="danger"
                                        onClick={this.deleteUser.bind(this, index)}

                                    >Delete</Button>
                                </div>
                                <div>
                                    <Toggle
                                        updateUser={this.updateUser}
                                        value={index}
                                        users={
                                            {
                                                firstName: user.firstName,
                                                lastName: user.lastName,
                                                email: user.email,
                                                country: user.country,
                                                img: user.img
                                            }}
                                    />

                                </div>

                            </div>
                        </div>
                    )}
                </ul>

            </div>
        )
    }
}

export default AddressCrud
