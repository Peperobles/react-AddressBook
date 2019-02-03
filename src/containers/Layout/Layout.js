import React, { Component } from 'react'

// Components
import {Header}  from '../Header/Header';
import {Main}  from '../Main/Main';
import {Footer}  from '../Footer/Footer';


export class Layout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default Layout
