import styled from 'styled-components';
import colorConfig from 'baseConfig/globalColor';
import { device } from 'baseConfig/globalStyles';

export const ContentWrapper = styled.div`
  color: ${colorConfig.whiteColor};
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  padding: 30px 20px;

  p {
    font-size: 14px;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 25px;
  }

  @media ${device.tablet} {
    margin-bottom: 100px;
    
    h1 {
      font-size: 2.8rem;
      font-weight: bold;
    }
    p {
      font-size: 16px;
    }
  }
`;