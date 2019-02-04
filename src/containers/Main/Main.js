import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './Main.css'

export class Main extends Component {
  render() {
    return (
      <div id="content">
        <div id="smoke" className="container-fluid">
          <div className="row align-items-center" id="main-container">
            <div className="col align-self-end">
              <h1 className="text-center text-light">ADDRESS CONTACT - GOT</h1>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col text-center">
              <NavLink to='/contacts'>
                <button type="button" className="btn btn-outline-secondary btn-lg">Contacts</button>
              </NavLink>
            </div>
            <div className="col text-center">
              <NavLink to='/admin'>
                <button type="button" className="btn btn-outline-secondary btn-lg">Admin</button>
              </NavLink>
            </div>
          </div>
        </div>


      </div>

    )
  }
}

export default Main
