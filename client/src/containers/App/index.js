import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from 'routes';
import { GlobalStyle } from 'baseConfig/globalStyles';

import GuestHeader from 'components/GuestHeader';
import Landing from 'containers/Landing';
import Login from 'containers/Auth/Login';
import Registration from 'containers/Auth/Register';

import guestBg from 'assets/images/landing-bg.jpg';
import { GuestWrapper, GuestContentWrapper } from './StyledComponents';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <GuestWrapper backgroundImage={guestBg}>
        <GuestHeader />
        <GuestContentWrapper>
          <Route exact path={routes.index} component={Landing} />
          <Route exact path={routes.login} component={Login} />
          <Route exact path={routes.register} component={Registration} />
        </GuestContentWrapper>
      </GuestWrapper>
    </Router>
  );
}

export default App;
