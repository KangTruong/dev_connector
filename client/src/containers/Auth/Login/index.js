import React from 'react';

import Button from 'components/Button';
import { ForWrapper, FormGroup, FormTitle } from 'containers/Auth/StyledComponents';

const Login = () => (
  <ForWrapper>
    <FormTitle>
      <h1>Login</h1>
      <p>Sign in to your DevConnector account</p>
    </FormTitle>

    <FormGroup>
      <input type="email" name="email" placeholder="Enter your email" />
      <label>Email</label>
    </FormGroup>

    <FormGroup>
      <input type="password" name="password" placeholder="Enter your password" />
      <label>Password</label>
    </FormGroup>
    <Button label="Login" theme="primary" width="100%" />
  </ForWrapper>
);

export default Login;
