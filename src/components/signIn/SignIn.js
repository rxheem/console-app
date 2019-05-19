import React, { Component } from 'react';
import { Button, Checkbox, Form, Container } from 'semantic-ui-react';
import Link from 'react-router-dom/Link';

import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      pin: '',
      churchCode: '',
      requiresPIN: false
    };
  }

  // Handles the event changes for the email and password
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <Container id='SignIn'>
        <div className='sign-in-header'>
          <h2>Sign In</h2>
        </div>
        <br />

        <Form id='sign-in-form' action=''>
          <Form.Field>
            <label>Email or username</label>

            {/* Autofocus the username field */}
            <input
              autoFocus
              type='text'
              id='username'
              name='username'
              placeholder='Enter username or email'
              value={this.state.username}
              onChange={this.handleChange.bind(this)}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter password'
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
            />
          </Form.Field>

          <Form.Field>
            <label>Church Code</label>
            <input
              type='text'
              id='churchCode'
              name='churchCode'
              placeholder='Enter church code'
              maxlength='4'
              value={this.state.churchCode}
              onChange={this.handleChange.bind(this)}
            />
          </Form.Field>

          <Form.Field hidden={!this.state.requiresPIN}>
            <label className='security-pin-text'>
              To protect your accout, please enter your 4 digit security PIN
            </label>
            <input
              type='password'
              id='pin'
              name='pin'
              placeholder='Enter PIN'
              maxlength='4'
              value={this.state.pin}
              onChange={this.handleChange.bind(this)}
              style={{ width: '200px' }}
            />
          </Form.Field>

          <Form.Field>
            <Checkbox label='Keep me signed in' />
          </Form.Field>

          <div className='password-help'>
            <Link to='/forgot-passowrd/' className='fogot-password'>
              Need help signing in?
            </Link>
          </div>

          <Button type='submit'>Sign In</Button>
        </Form>
      </Container>
    );
  }
}

export default SignIn;
