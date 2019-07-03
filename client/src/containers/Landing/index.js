import React from 'react';

import routes from 'routes';
import { ButtonLink } from 'components/Button/ButtonLink';
import { ContentWrapper } from './StyledComponents';

const LandingPage = () => (
  <ContentWrapper>
    <h1>The Most Complete Social Network is Here!</h1>
    <p>
      We are the best and biggest social network with 5 billion active users all around the world. 
      Share your thoughts, write blog posts, show your favorite music, earn badges and much more!
    </p>
        
    <div className='buttons'>
      <ButtonLink to={routes.register} margin="20px 10px" label="Sign Up" />
      <ButtonLink to={routes.login} theme="dark" margin="20px 10px" label="Login" />
    </div>
  </ContentWrapper>
);

export default LandingPage;
