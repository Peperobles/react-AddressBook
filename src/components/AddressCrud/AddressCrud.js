import React, { Component } from 'react';

//Components
import {Form} from '../Form/Form';

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
            users: [...previousState.users, {firstName, lastName, email, country}]
        }))

        console.log(this.state.users);
    }

    //Receive from localStorage
    componentWillMount(){
        localStorage.getItem('Contacts') && this.setState({
            users: JSON.parse(localStorage.getItem('Contacts'))
        })
    }





    // DEPRECATED ********************************** LOOK FOR OTHER WAY.
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('Contacts', JSON.stringify(nextState.users))
    }

    render() {
        return (
            <div>
                <Form addUser = {this.addUser}/>
                <hr/>
                <h6>USERS:</h6>
                <ul>
                 {this.state.users.map((user) =>

                    <li key={user.email}>{user.firstName}{user.lastName}{user.email}{user.country}</li>
                 )}   
                </ul>
                
            </div>
        )
    }
}

export default AddressCrud
