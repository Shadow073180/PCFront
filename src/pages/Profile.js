import React, { Component } from 'react'
import PCAPI from '../api/PCAPI'
import {BrowserRouter, Link } from 'react-router-dom';



class DaterPage extends Component {
  state = {
    dater: {}
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
    return (
    <div className='profile'>
        <img src={dater['dater_photo']} className='dater-pic' width='400' height='400' alt='dater-pic'/>
          <p><h1 className='profile-username'>User Name</h1></p>
          <br />
          <br />
          <br />
          <p><h4>Location City: {dater['city']}</h4></p>
          <br />
          <p><h4>Location State: {dater['state']}</h4></p>
          <br />
          <p><h4>Looking For: {dater['looking_for']}</h4></p>
          <br />
          <p><h4>Smoker: {dater['smoker']}</h4></p>
          <br />
          <p><h4>Vaper: {dater['vaper']}</h4></p>
          <br />
          <div className='profile-aboutme'>
            <p><h5><b>About Me: {dater['dater_story']}</b></h5></p>
          </div>
          <p><h4>Body Type: {dater['body_type']}</h4></p>
          <br />
          <p><h4>Ethnicity: {dater['ethnicity']}</h4></p>
          <br />
          <p><h4>Children: {dater['has_children']}</h4></p>
          <p><h4 className='children'>How many: {dater['has_children_no']}</h4></p>
        <img src={dater['pet_photo']} alt='dog' className='dog-picture' width='400' height='400'/>
          <p><h4 className='dog-info'>Pet Name: {dater['pet_name']}</h4></p>
          <br />
          <p><h4 className='dog-info'>Breed: {dater['pet_breed']}</h4></p>
          <br />
          <p><h4 className='dog-info'>Color: {dater['pet_color']}</h4></p>
          <br />
          <p><h4 className='dog-info'>Age: {dater['pet_age']}</h4></p>
          
          <div className='about-pet' >
            <p><h5><b>About my pet: {dater['pet_story']}</b></h5></p>
          </div>
      
        <BrowserRouter>
          <button onClick="window.location.reload()"><Link to={"/PC/:daterID/update_profile"}>Update Profile</Link></button>
        </BrowserRouter> 
    </div>
    )
  }
}

export default DaterPage