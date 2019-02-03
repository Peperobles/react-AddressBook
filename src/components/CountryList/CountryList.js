import React, { Component } from 'react';

import countryList from 'country-list'
 
class CountryListOptions extends Component {
  constructor(props) {
    super(props)
 
    this.options = countryList.getData();
 
    this.state = {
      options: this.options,
      value: null,
    }
  }
 
  changeHandler = value => {
    this.setState({ value })
  }
 
  render() {
    return (
        <div >
            <select name="country" form="form-group">
            <option value="">--</option>
            {this.state.options.map((country)=> 
                <option key={country.code} value={country.name}>{country.name}</option>
            )}
            </select>
        </div>
    )
  }
}
export default CountryListOptions;