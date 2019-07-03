import React from 'react';
import { ButtonLinkWrapper } from './StyledComponents';

export const ButtonLink = (props) => (
  <ButtonLinkWrapper to={props.path} {...props}>
    {props.children ? props.children : props.label}
  </ButtonLinkWrapper>
);