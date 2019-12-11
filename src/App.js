import React ,{Component} from 'react';
import logo from './logo.svg';
import {Redirect, BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

import HomePage from './pages/HomePage.js';
import Add_User from './pages/Add_User.js';

import Profile from './pages/Profile';
import Search from './pages/Search';
import My_Account from './pages/My_Account';
import Potential_Card from './components/Potential_card';
import Potentials_List from './components/potList';
import Update_Profile from './pages/Update_Profile';
import Update_Account from './pages/Update_Account';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  force() {
    // Force a render without state change...
    this.forceUpdate();
    }
    componentDidMount() {
      if (this.state.logged_in) {
        console.log('You are logged in')
        fetch('https://cors-anywhere.herokuapp.com/https://pet-connections.herokuapp.com/PC/current_user/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        })
          .then(res => res.json())
          .then(json => {
            this.setState({ username: json.username });
          });
      }
    }
  
    handle_login = (e, data) => {
      e.preventDefault();
      console.log('Fetching Token')
      fetch('https://cors-anywhere.herokuapp.com/https://pet-connections.herokuapp.com/token-auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          this.setState({
            logged_in: true,
            displayed_form: '',
            username: json.user.username
          });
        });
    };
  
    handle_signup = (e, data) => {
      console.log('getting ready to sign you up')
      e.preventDefault();
      fetch('https://cors-anywhere.herokuapp.com/https://pet-connections.herokuapp.com/PC/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          this.setState({
            logged_in: true,
            displayed_form: '',
            username: json.username
          });
        });
    };
  
    handle_logout = () => {
      console.log('Logging you out')
      localStorage.removeItem('token');
      this.setState({ logged_in: false, username: '' });
    };
  
    display_form = form => {
      this.setState({
        displayed_form: form
      });
    };
  

  render(){
    
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }


  
  return (
  <div>

    <div align='center' className='title-bar'>
      <h1 className='title'>
        <b>
          PET CONNECTIONS
        </b>
      </h1>
    </div>

    <div align='center' className='Nav-bar-bottom'>
      <hr  className = 'Hr-bottom'/>     
        <button onClick="window.location.reload()">
          <a href={"/PC/:daterID/messages"} className='navbarMessages'>
            Messages
          </a>
        </button> 

        <button onClick="window.location.reload()" className='Profile-button'>
          <a href={"/PC/:daterID"}  className='navbarProfile'>
            Profile
          </a>
        </button> 

        <button onClick="window.location.reload()" className='Account-button'>
          <a href={"/PC/:daterID/my_account"} className='navbarAccount'>
            Account
          </a>
        </button> 

        <button onClick="window.location.reload()" >
          <a href={'/PC/:daterID/search'} className='navbarSearch'>
            Search
          </a>
        </button> 

        <button onClick="window.location.reload()" className='navbar-logout'  align='right' >
          <a href={'/login'} className='navbarLogOut'>
            LogOut
          </a>
        </button> 
      <hr className='Hr-bottom' />  
    </div>
    <div className="App">
      <Nav
        logged_in={this.state.logged_in}
        display_form={this.display_form}
        handle_logout={this.handle_logout}
      />
      {form}
      <h3>
        {this.state.logged_in
          ? `Hello, ${this.state.username}`
          : 'Please Log In'}
      </h3>
    </div>


          
    <div>
      <BrowserRouter>
        <Route exact path={`/PC/list${this.state.username}/homepage`} component={HomePage} />
        <Route exact path="/add-user" component={Add_User} />
        <Route exact path="/PC" component={LoginForm}/>
        <Route exact path="/PC/:daterID" component={Profile} />
        <Route exact path = "/PC/:daterID/search" component={Search}/>
        <Route exact path = "/PC/:daterID/my_account" component={My_Account} />
        <Route exact path = "/PC/:daterID/potential_card" component={Potential_Card} />
        <Route exact path = "/PC/:daterID/potentials_list" component={Potentials_List} />
        <Route exact path= "/PC/:daterID/update_profile" component = {Update_Profile} />
        <Route exact path= "/PC/:daterID/update_account" component = {Update_Account} />
      </BrowserRouter>
    </div> 

  </div> 
   
    );
  }
}

export default App;

