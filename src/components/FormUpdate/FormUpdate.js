import React, { Component } from 'react'

//Components
import CountryListOptions from '../CountryList/CountryList';

export class FormUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Default send the same values
            firstName: this.props.users.firstName,
            lastName: this.props.users.lastName,
            email: this.props.users.email,
            country: this.props.users.country,
            img: this.props.users.img

        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <form
                    onChange={(event) => this.handleUserInput(event)}
                >
                    <h2>Update User</h2>
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
                        onClick={this.props.updateUser.bind(this, this.props.value, this.state.firstName, this.state.lastName, this.state.email, this.state.country, this.state.img)}
                    >
                        Update User
                    </button>
                </form>
            </div>
        )
    }
}

export default FormUpdate
