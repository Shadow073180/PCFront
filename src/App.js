import React ,{Component} from 'react';
import logo from './logo.svg';
import {Redirect, BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage.js';
import Add_User from './pages/Add_User.js';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Search from './pages/Search';
import My_Account from './pages/My_Account';
import Potential_Card from './components/Potential_card';
import Potentials_List from './components/potList';
import Update_Profile from './pages/Update_Profile';
import Update_Account from './pages/Update_Account';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  state ={
      

  }

  force() {
    // Force a render without state change...
    this.forceUpdate();
}

  render(){

  
  return (
    <div> 
      <head>
        <link href="https://fonts.googleapis.com/css?family=Tangerine&display=swap" rel="stylesheet"></link>
      </head>
      <div align='center' className='title-bar'>
      
        <h1 className='title'><b>PET CONNECTIONS</b></h1>
      </div>
      <div align='center' className='Nav-bar-bottom'>
      <hr  className = 'Hr-bottom'/>
      <BrowserRouter>     
        <button onClick="window.location.reload()"><Link to={"/PC/:daterID/messages"} className='navbarMessages'>Messages</Link></button>       
        <button onClick="window.location.reload()" className='Profile-button'><Link to={"/PC/:daterID"}  className='navbarProfile'>Profile</Link></button> 
        <button onClick="window.location.reload()" className='Account-button'><Link to={"/PC/:daterID/my_account"} className='navbarAccount'>Account</Link></button>            
        <button onClick="window.location.reload()" ><Link to={'/PC/:daterID/search'} className='navbarSearch'>Search</Link></button>        
        <button onClick="window.location.reload()" className='navbar-logout'  align='right' ><Link to={'/login'} className='navbarLogOut'>LogOut</Link></button>   
        <hr className='Hr-bottom' />
      </BrowserRouter>  
      </div>
      <div>
      <BrowserRouter>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/add-user" component={Add_User} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/PC/:daterID" component={Profile} />
        <Route exact path = "/PC/:daterID/search" component={Search}/>
        <Route exact path = "/PC/:daterID/my_account" component={My_Account} />
        <Route exact path = "/PC/:daterID/potential_card" component={Potential_Card} />
        <Route exact path = "/PC/:daterID/potentials_list" component={Potentials_List} />
        <Route exact path= "/PC/:daterID/update_profile" component = {Update_Profile} />
        <Route exact path= "/PC/:daterID/update_account" component = {Update_Account} />
      </div>
        </BrowserRouter>
      </div>
    </div>
  );
}
}

export default App;
