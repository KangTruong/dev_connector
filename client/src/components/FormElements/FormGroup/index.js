import React from 'react';
import { FormGroupWrapper } from './StyledComponents';

const FormGroup = (props) => (
  <FormGroupWrapper>{props.children}</FormGroupWrapper>
);

export default FormGroup;