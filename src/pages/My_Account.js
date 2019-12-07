import React, { Component } from 'react'
import PCAPI from '../api/PCAPI'
import {BrowserRouter, Link } from 'react-router-dom';

class My_Account extends Component {
  state ={
      dater:{}
  }
  componentDidMount() {
    const id = this.props.match.params.daterID
    PCAPI.fetchDaterByID(id)
      .then((dater) => this.setState({
        dater: dater
    }))
  }

  render(){
    const dater = this.state.dater
    return(

      <div>
      <div className='search-border-outer-box'>
        <div className='search-border-inner-box'>
          <div className='searchbox'>
            <h1 className='account-title'><b>My Account Info.</b></h1>
            <br />
            <h3 class='account-info' >{dater['dater_email_address']}</h3>
            <br />
            <h3 class='account-info'>Name: {dater['dater_name']}</h3>
            <br />
            <h3 class='account-info'>Address Line 1: {dater['address_line_1']}</h3>
            <br />
            <h3 class='account-info'>Address Line 2: {dater['address_line_2']}</h3>
            <br />
            <h3 class='account-info'>City: {dater['city']}</h3>
            <br />
            <h3 class='account-info'>State: {dater['state']}</h3>
            <br />
            <h3 class='account-info'>Zip: {dater['zip']}</h3>
            <br />
            <h3 class='account-info'>Phone: {dater['dater_telephone']}</h3>
            <br />

          </div>
          <BrowserRouter>
          <h3> <button onClick="window.location.reload()" ><Link to={"/PC/:daterID/update_account"}>Update Account</Link></button><button onClick="window.location.reload()"className='account-info-cancel-button'> <Link to={"/"}>Cancel</Link></button></h3>
          </BrowserRouter>
      </div>
      </div>
    </div>

    )
  }
}

export default My_Account