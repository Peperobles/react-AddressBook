import React, { Component } from 'react'

//Components
import CountryListOptions from '../CountryList/CountryList';

export class FormUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Default send the same values
            firstName: this.props.contacts.firstName,
            lastName: this.props.contacts.lastName,
            email: this.props.contacts.email,
            country: this.props.contacts.country,
            img: this.props.contacts.img

        }
    }
    // Same than Form
    handleContactInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <form
                    onChange={(event) => this.handleContactInput(event)}
                >
                    <h2>Update Contact</h2>
                    <div >
                        <label >First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            placeholder={this.state.firstName}
                        />
                    </div>
                    <div >
                        <label >Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder={this.state.lastName} />
                    </div>
                    <div>
                        <label >Email address</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder={this.state.email} />
                    </div>
                    <div>
                        <label>Country</label>
                        <CountryListOptions />
                    </div>
                    <div className="form-group">
                        <label >Url Img</label>
                        <input
                            type="text"
                            className="form-control"
                            name="img"
                            defaultValue='' />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.props.updateContact.bind(this, this.props.value, this.state.firstName, this.state.lastName, this.state.email, this.state.country, this.state.img)}
                    >
                        Update Contact
                    </button>
                </form>
            </div>
        )
    }
}

export default FormUpdate
