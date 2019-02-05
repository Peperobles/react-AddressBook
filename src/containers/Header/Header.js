import React, { Component } from 'react';

//Routes
import { NavLink } from 'react-router-dom';

// Css
import './Header.css'

export class Header extends Component {

    render() {
        return (
            <header>
                <div className="container-fluid">
                    <div className="row align-items-center" id="header-container">
                        <div className="col text-center">
                            <NavLink to='/'>Home</NavLink>
                        </div>
                        <div className="col text-center">
                            <NavLink to='/contacts'>Contacts</NavLink>
                        </div>
                        <div className="col text-center">
                            <NavLink to='/admin'>Admin</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
