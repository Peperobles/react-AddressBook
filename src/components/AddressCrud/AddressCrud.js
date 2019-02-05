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

    // Data from json in data folder
    preloadContacts = () => {
        this.setState({
            contacts: example
        })
    }

    // Add new contact without loosing data
    addContact = (firstName, lastName, email, country, img) => {
        this.setState(previousState => ({
            contacts: [...previousState.contacts, { firstName, lastName, email, country, img }]
        }))
    }

    // Update specific field, no override with empty fields
    updateContact = (key, first, last, mail, country, img) => {
        let contactsArray = JSON.parse(localStorage.getItem('Contacts'))

        contactsArray.splice(key, 1, { firstName: first, lastName: last, email: mail, country: country, img: img })

        localStorage.setItem('Contacts', JSON.stringify(contactsArray));

        //setState again to prevent refresh
        this.setState({ contacts: JSON.parse(localStorage.getItem('Contacts')) })
    }

    // Delete 1 specific contact
    deleteContact(key) {
        // Get data, parse JSON, splice and set again without the target.
        let contactsArray = JSON.parse(localStorage.getItem('Contacts'))
        contactsArray.splice(key, 1)
        localStorage.setItem('Contacts', JSON.stringify(contactsArray));

        //setState again to prevent refresh
        this.setState({ contacts: JSON.parse(localStorage.getItem('Contacts')) })
    }

    // Get data from localStorage
    componentWillMount() {
        localStorage.getItem('Contacts') && this.setState({
            contacts: JSON.parse(localStorage.getItem('Contacts'))
        })
    }

    // Save data to localStorage
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Contacts', JSON.stringify(nextState.contacts))
    }

    render() {
        return (
            <div className="container-fluid" id="admin">
                <div className="row">
                    <div className="col text-center m-3">
                        <Button
                            color="info"
                            onClick={this.preloadContacts.bind()}
                        >
                            -PRELOAD CONTACTS-
                    </Button>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Form addContact={this.addContact} />
                        </div>
                        <div className="col">
                            <h2 className="text-center">CONTACTS</h2>
                            <ul className="text-center">
                                {this.state.contacts.map((contact, index) =>
                                    <div key={index} id={contact.email}>
                                        <img src={contact.img} alt={contact.firstName} />
                                        <li>NAME: {contact.firstName}</li>
                                        <li>LAST NAME: {contact.lastName}</li>
                                        <li>EMAIL: {contact.email}</li>
                                        <li>COUNTRY: {contact.country}</li>
                                        <div className="row">
                                            <div className="col-12 p-1">
                                                <Button
                                                    color="danger"
                                                    onClick={this.deleteContact.bind(this, index)}
                                                >Delete</Button>
                                            </div>
                                            <div className="col-12 p-1">
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
                                        <hr/>
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddressCrud
