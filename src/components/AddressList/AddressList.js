import React, { Component } from 'react'

//Components
import CardContact from '../Cards/Cards';

//Css
import './AddressList.css'

export class AddressList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: [{}]
    }
  }

  // Get data from localStorage
  componentWillMount() {
    localStorage.getItem('Contacts') && this.setState({
      contacts: JSON.parse(localStorage.getItem('Contacts'))
    })
  }
  render() {
    return (
      <div id="list">
        <h2 className="text-center pt-3">When you play a game of thrones you win or you die.</h2>
        <div className="container">
          <div className="row">
          {this.state.contacts.map((contact, index) =>
            <div className="col-sm-4 mt-3" key={index}>
              <CardContact 
              contacts={
                {firstName: contact.firstName,
                lastName: contact.lastName,
                email: contact.email,
                country: contact.country,
                img: contact.img }
                }/>
            </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default AddressList
