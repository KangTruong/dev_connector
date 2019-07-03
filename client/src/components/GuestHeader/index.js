import React, { memo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import routes from 'routes';

import { Wrapper, Logo, MenuWrapper, MenuItem } from './StyledComponents';

const GuestHeader = memo(() => (
  <Wrapper className="header">
    <Logo>
      <Link to={routes.index}>
        {`</>DevConnector`}
        </Link>
    </Logo>
    
      
    <MenuWrapper>
      <MenuItem>
        <NavLink to={routes.login} activeClassName="active">Login</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={routes.register} activeClassName="active">Register</NavLink>
      </MenuItem>
    </MenuWrapper>
  </Wrapper>
));

export default GuestHeader;
