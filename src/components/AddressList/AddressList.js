import React, { Component } from 'react'

export class AddressList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [{}]
    }
  }

  componentWillMount() {
    localStorage.getItem('Contacts') && this.setState({
      users: JSON.parse(localStorage.getItem('Contacts'))
    })
  }
  render() {
    return (
      <div>
        <h2>AQUI IRAN LOS CONTACTOS LEIDOS DESDE JSON</h2>
        <ul>
          {this.state.users.map((user, index) =>
            <li key={index}>{user.firstName}{user.lastName}{user.email}{user.country}</li>
          )}
        </ul>

      </div>
    )
  }
}

export default AddressList
