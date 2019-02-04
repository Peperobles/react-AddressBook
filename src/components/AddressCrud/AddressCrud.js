import React, { Component } from 'react';

import { Button } from 'reactstrap'

//CSS
import './AddressCrud.css'

//Components
import { Form } from '../Form/Form';
import Toggle from '../Toggle/Toggle';

//JSON - Data
import example from '../../data/contacts.json'

export class AddressCrud extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contacts: [{}]
        }
    }

    preloadContacts = () =>{
        this.setState({
            contacts: example
          })
    }

    addContact = (firstName, lastName, email, country, img) => {
        this.setState(previousState => ({
            contacts: [...previousState.contacts, { firstName, lastName, email, country, img }]
        }))
    }

    updateContact = (key, first, last, mail, country, img) => {
        let contactsArray = JSON.parse(localStorage.getItem('Contacts'))

        contactsArray.splice(key, 1, { firstName: first, lastName: last, email: mail, country: country, img: img })

        localStorage.setItem('Contacts', JSON.stringify(contactsArray));

        //setState again to prevent refresh
        this.setState({ contacts: JSON.parse(localStorage.getItem('Contacts')) })
    }

    deleteContact(key) {
        // Get data, parse JSON, splice and set again without the target.
        let contactsArray = JSON.parse(localStorage.getItem('Contacts'))
        contactsArray.splice(key, 1)
        localStorage.setItem('Contacts', JSON.stringify(contactsArray));

        //setState again to prevent refresh
        this.setState({ contacts: JSON.parse(localStorage.getItem('Contacts')) })
    }

    componentWillMount() {
        //Receive from localStorage
        localStorage.getItem('Contacts') && this.setState({
            contacts: JSON.parse(localStorage.getItem('Contacts'))
        })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Contacts', JSON.stringify(nextState.contacts))
    }

    render() {
        return (
            <div className="container mt-3" id="admin">
                <Button
                    color="success"
                    onClick={this.preloadContacts.bind()}
                >
                    -PRELOAD CONTACTS-
            </Button>
                <div className="row">
                    <div className="col">
                        <Form addContact={this.addContact} />
                    </div>
                    <div className="col">
                        <h2>CONTACTS</h2>
                        <ul>
                            {this.state.contacts.map((contact, index) =>
                                <div key={index} id={contact.email}>
                                    <img src={contact.img} alt={contact.firstName} />
                                    <li>NAME: {contact.firstName}</li>
                                    <li>LAST NAME: {contact.lastName}</li>
                                    <li>EMAIL: {contact.email}</li>
                                    <li>COUNTRY: {contact.country}</li>
                                    <div className="row">
                                        <div>
                                            <Button
                                                color="danger"
                                                onClick={this.deleteContact.bind(this, index)}

                                            >Delete</Button>
                                        </div>
                                        <div>
                                            <Toggle
                                                updateContact={this.updateContact}
                                                value={index}
                                                contacts={
                                                    {
                                                        firstName: contact.firstName,
                                                        lastName: contact.lastName,
                                                        email: contact.email,
                                                        country: contact.country,
                                                        img: contact.img
                                                    }}
                                            />

                                        </div>

                                    </div>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddressCrud
