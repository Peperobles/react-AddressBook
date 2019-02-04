import React, { Component } from 'react'

// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Components
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';

import AddressCrud from '../../components/AddressCrud/AddressCrud';
import AddressList from '../../components/AddressList/AddressList';
import ErrorPage from '../../components/ErrorPage/ErrorPage';


export class Layout extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/contacts" component={AddressList} exact />
            <Route path="/admin" component={AddressCrud} exact />
            <Route component={ErrorPage}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>


      // <div>
      //   <Main />
      // </div>
    )
  }
}

export default Layout
