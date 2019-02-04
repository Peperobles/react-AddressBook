import React, { Component } from 'react';

//Components
import { Form } from '../Form/Form';

export class AddressCrud extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [{}]
        }

        // this.addUser = this.addUser.bind(this);

    }

    addUser = (firstName, lastName, email, country) => {
        // To update users an add to array
        this.setState(previousState => ({
            users: [...previousState.users, { firstName, lastName, email, country }]
        }))
    }

    updateUser(){
        console.log("HOLA")
    }

    deleteUser(key){
        console.log(this.state.users[key]);
        this.setState({ users: [...this.state.users, this.state.users[key]] });

        // localStorage.removeItem('Contacts',key);
        // this.setState(previousState => ({
            
        // }))
        // console.log(key)
    }

    //Receive from localStorage
    componentWillMount() {
        localStorage.getItem('Contacts') && this.setState({
            users: JSON.parse(localStorage.getItem('Contacts'))
        })
    }

    // DEPRECATED ********************************** LOOK FOR OTHER WAY.
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Contacts', JSON.stringify(nextState.users))
    }

    render() {
        // console.log(this.state.users);
        return (
            <div>
                <Form addUser={this.addUser} />
                <hr />
                <h6>USERS:</h6>
                <ul>
                    {this.state.users.map((user, index) =>
                        <div key={index} id={user.email}>
                            <h6>NAME: {user.firstName}</h6>
                            <li>LAST NAME: {user.lastName}</li>
                            <li>EMAIL: {user.email}</li>
                            <li>COUNTRY: {user.country}</li>
                            <button onClick={this.updateUser}>UPDATE</button> <button onClick={this.deleteUser.bind(this,index)}>DELETE</button>
                        </div>
                    )}
                </ul>

            </div>
        )
    }
}

export default AddressCrud
