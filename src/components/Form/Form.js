import React, { Component } from 'react'

//Components
import { FormErrors } from '../FormErrors/FormErrors';
import CountryListOptions from '../CountryList/CountryList';

//css
import './Form.css';


export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            formErrors: { firstName: '', lastName: '', email: '', country: '' },
            firstNameValid: false,
            lastNameValid: false,
            emailValid: false,
            countryValid: false,
            formValid: false,

            test: '',
        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let countrValid = this.state.countryValid;

        switch (fieldName) {
            case 'firstName':
                firstNameValid = value.length > 1;
                fieldValidationErrors.firstName = firstNameValid ? '' : ' is too short';
                break;
            case 'lastName':
                lastNameValid = value.length > 1;
                fieldValidationErrors.lastName = lastNameValid ? '' : ' is too asdfasdf';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'country':
                countrValid = value.length > 1
                fieldValidationErrors.country = countrValid ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,

        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        //Need error.length because is initialized as '';
        return (error.length === 0 ? '' : 'has-error');
    }


    render() {
        return (
            <div>
                <div className="panel panel-default”">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <form
                    className="demoForm"
                    onChange={(event) => this.handleUserInput(event)}
                >
                    <h2>Sign up</h2>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={this.state.firstName} 
                            />
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.lastName)}`}>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={this.state.lastName} />
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                        <label >Email address</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={this.state.email} />
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.country)}`}>
                        <label>Country</label>
                        <CountryListOptions />
                    </div>
                    <button 
                    type="button"
                    className="btn btn-primary"
                    onClick={this.props.addUser.bind(this, this.state.firstName, this.state.lastName, this.state.email, this.state.country)}
                    >
                        Sign up
                    </button>
                </form>
            </div>
        )
    }
}

export default Form
