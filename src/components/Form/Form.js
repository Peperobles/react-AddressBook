import React, { Component } from 'react'

//Components
import { FormErrors } from '../FormErrors/FormErrors';
import CountryListOptions from '../CountryList/CountryList';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            img: 'http://www.ministeriodecultura.gob.cu/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
            formErrors: { firstName: '', lastName: '', email: '', country: '' },
            firstNameValid: false,
            lastNameValid: false,
            emailValid: false,
            countryValid: false,

            formValid: false,

            test: '',
        }
    }

    // Set State with target name and target value && validate Field
    handleContactInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    // Al validations required, when true in validateForm go formValid true and button is enable
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let emailValid = this.state.emailValid;
        let countryValid = this.state.countryValid;

        switch (fieldName) {
            case 'firstName':
                firstNameValid = value.length > 1;
                fieldValidationErrors.firstName = firstNameValid ? '' : ' is too short';
                break;
            case 'lastName':
                lastNameValid = value.length > 1;
                fieldValidationErrors.lastName = lastNameValid ? '' : ' is too short';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'country':
                countryValid = value.length > 1
                fieldValidationErrors.country = countryValid ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            emailValid: emailValid,
            countryValid: countryValid

        }, this.validateForm);
    }

    // If all are true, formValid true
    validateForm() {
        this.setState({ formValid: this.state.firstNameValid && this.state.lastNameValid && this.state.emailValid && this.state.countryValid });
    }

    render() {
        return (
            <div>
                <form
                    className="demoForm"
                    onChange={(event) => this.handleContactInput(event)}
                >
                    <h2>New Contact</h2>
                    <div className="panel panel-default”">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            defaultValue={this.state.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            defaultValue={this.state.lastName} />
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            defaultValue={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <CountryListOptions />
                    </div>
                    <div className="form-group">
                        <label >Url Img</label>
                        <input
                            type="text"
                            className="form-control"
                            name="img"
                            defaultValue=''
                            placeholder="url...jpg" />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        disabled={!this.state.formValid}
                        onClick={this.props.addContact.bind(this, this.state.firstName, this.state.lastName, this.state.email, this.state.country, this.state.img)}
                    >
                        Add Contact
                    </button>
                </form>
            </div>
        )
    }
}

export default Form
