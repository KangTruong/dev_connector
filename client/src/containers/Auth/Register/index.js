import React from 'react';

import Button from 'components/Button';
import { ForWrapper, FormGroup, FormTitle } from 'containers/Auth/StyledComponents';

const Registration = () => (
  <ForWrapper>
    <FormTitle>
      <h1>Sign Up</h1>
      <p>Create your DevConnector account</p>
    </FormTitle>

    <FormGroup>
      <input type="text" name="name" placeholder="Enter your name" />
      <label>Name</label>
    </FormGroup>

    <FormGroup>
      <input type="email" name="email" placeholder="Enter your email" />
      <label>Email</label>
    </FormGroup>

    <FormGroup>
      <input type="password" name="password" placeholder="Enter your password" />
      <label>Password</label>
    </FormGroup>

    <FormGroup>
      <input type="password" name="confirm_password" placeholder="Confirm password" />
      <label>Confirm Password</label>
    </FormGroup>
    <Button label="Create account" theme="primary" width="100%" />
  </ForWrapper>
);

export default Registration;
