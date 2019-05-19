import React, { Component } from 'react';
import { Button, Checkbox, Form, Container } from 'semantic-ui-react';

import './SignIn.css'

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      churchCode: ''
    };
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
              autofocus='true'
              type='text'
              id='username'
              name='username'
              placeholder='Enter username or email'
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter password'
            />
          </Form.Field>

          <Form.Field>
            <label>Church Code</label>
            <input
              type='text'
              id='churchCode'
              name='churchCode'
              placeholder='Enter church code'
            />
          </Form.Field>

          <Form.Field>
            <Checkbox label='Keep me signed in'/>
          </Form.Field>

          <input type='submit' />
        </Form>
      </Container>
    );
  }
}

export default SignIn;
