import React, { Component } from 'react'

import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row align-items-center" id="footer-container">
            <div className="col-12">
              <p>We hate Joffrey</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
