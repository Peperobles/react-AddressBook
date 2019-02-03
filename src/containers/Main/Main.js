import React, { Component } from 'react';

// Components
import AddressCrud from '../../components/AddressCrud/AddressCrud';
import AddressList from '../../components/AddressList/AddressList';

export class Main extends Component {
  render() {
    return (
      <div>
        <AddressCrud/>
        <hr/>
        <AddressList/>
      </div>
    )
  }
}

export default Main
