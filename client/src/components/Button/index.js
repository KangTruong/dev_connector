import React from 'react';
import { ButtonWrapper } from './StyledComponents';

const Button = (props) => (
  <ButtonWrapper {...props} type="submit">
    {props.children ? props.children : props.label}
  </ButtonWrapper>
);

export default Button;