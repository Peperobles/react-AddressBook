import React, { Component } from 'react';

//Routes
import { NavLink } from 'react-router-dom';

// Css
import './Header.css'

export class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
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
