import React, { Component } from 'react';
import { Button, Form, Container, Col, Row } from 'react-bootstrap';
import Link from 'react-router-dom/Link';
import { withRouter } from 'react-router-dom';
import { Animated } from 'react-animated-css';

import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);

    // Route change
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: '',
      password: '',
      PIN: '',
      churchCode: '',
      requiresPIN: false
    };
  }

  componentDidMount() {
    document.title = 'Sign In | Console Membership Management Studio';
  }

  // Handles the event changes for the email and password
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  // Handles the form submission
  handleSubmit = function() {};

  render() {
    return (
      <Animated animationIn='fadeIn' animationOut='fadeOut' isVisible={true}>
        <Container
          id='SignIn'
          fluid={true}
          style={{ height: window.innerHeight - 40 }}
        >
          <div className='sign-in-header'>
            <h4>Sign In</h4>
            <span>Enter your credentials to get started</span>
          </div>
          <br />

          <Form id='sign-in-form' action='' method='post'>
            <Form.Group controlId='username'>
              <span className='required'>* </span>
              <Form.Label>Username or email</Form.Label>
              <Form.Control
                autoFocus
                type='email'
                placeholder='Enter username or email'
                value={this.state.username}
                onChange={this.handleChange.bind(this)}
              />
              <Form.Text className='text-muted ' style={{ color: 'white' }}>
                Emails are used for verification purposes only. We'll never
                share your email with anyone else and we'll never send you spam
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='password'>
              <span className='required'>* </span>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter your password'
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
              />
            </Form.Group>

            <Form.Group controlId='churchCode'>
              <span className='required'>* </span>
              <Form.Label>Church Code</Form.Label>
              <Form.Control
                maxLength='5'
                type='text'
                placeholder='Enter church code'
                value={this.state.churchCode}
                onChange={this.handleChange.bind(this)}
              />
            </Form.Group>

            <Form.Group controlId='PIN'>
              <Form.Label>Security PIN</Form.Label>
              <Form.Control
                maxLength='4'
                type='password'
                placeholder='Enter your 4 digit PIN'
                value={this.state.PIN}
                onChange={this.handleChange.bind(this)}
                style={{ width: '200px' }}
              />
              <Form.Text
                className='text-muted white'
                style={{ color: 'white' }}
              >
                Only enter your PIN if you are in a secure area and never share
                your PIN with anyone.
              </Form.Text>
            </Form.Group>

            <div className='password-help'>
              <Link
                className='fogot-password'
                to='/forgot-password/'
                style={{ color: 'white' }}
              >
                Need help signing in?
              </Link>
            </div>

            <Button primary onClick={this.handleSubmit}>
              Sign In
            </Button>
          </Form>
        </Container>
      </Animated>
    );
  }
}

export default withRouter(SignIn);
