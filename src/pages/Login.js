import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


class Login extends Component {
    state = {
        redirect: false,
    }

    handleSubmit(event) {
        event.preventDefault()
        const loginObject = {
            email: event.target.elements[0].value,
            password: event.target.elements[1].value
        }

        if(loginObject.email.length <= 0 || loginObject.password.length <= 0 ){
            alert('Please enter an email and password')
            return
        }
        // API call and redirect
        console.log(`Logging in ${loginObject.user}`)
        this.setState({redirect: true})
    }

    render() {
        const { redirect } = this.state
        if (redirect) {
          return <Redirect to = "/"/>
        }
        
        return (
            <div className="container" style={{width: 500}}>
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <h3 className="text-center lead mx-auto mb-2">Pet Connections</h3>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"                  
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                />
              </Form.Group>
              <Button block size="lg" type="submit">
                Login
              </Button>
            </Form>
            <p className="lead text-right mt-2">No account? <a href="/login">Signup!</a></p>
          </div>
        )
    }
}

export default Login