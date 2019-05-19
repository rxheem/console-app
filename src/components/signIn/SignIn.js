import React, { Component } from 'react';
import { Button, Form, Container, Col, Row } from 'react-bootstrap';
import Link from 'react-router-dom/Link';

import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      PIN: '',
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
      <Container id='SignIn' fluid={true}>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <span />
          </Col>
          {/* End first column */}

          <Col sm={12} md={6} lg={6}>
            <div className='sign-in-header'>
              <h4>Sign In</h4>
              <span>Enter your credentials to get started</span>
            </div>
            <br />

            <Form id='sign-in-form' action=''>
              <Form.Group controlId='username'>
                <Form.Label>Username or email</Form.Label>
                <Form.Control
                  autoFocus
                  type='email'
                  placeholder='Enter username or email'
                  value={this.state.username}
                  onChange={this.handleChange.bind(this)}
                />
                <Form.Text className='text-muted'>
                  Emails are used for verification purposes only. We'll never
                  share your email with anyone else and we'll never send you
                  spam
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter your password'
                  value={this.state.password}
                  onChange={this.handleChange.bind(this)}
                />
              </Form.Group>

              <Form.Group controlId='churchCode'>
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
                  type='text'
                  placeholder='Enter your 4 digit PIN'
                  value={this.state.PIN}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: '200px' }}
                />
              </Form.Group>

              <div className='password-help'>
                <Link className='fogot-password ' to='/forgot-password/'>
                  Need help signing in?
                </Link>
              </div>

              <Button primary>Sign In</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
