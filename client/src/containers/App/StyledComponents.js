import styled, { keyframes } from 'styled-components';
import { device } from 'baseConfig/globalStyles';

const slideLeftToRight = keyframes`
  0% {
    background-position: 0 0; 
  }
  100% {
    background-position: 2500px 0; 
  } 
`;

export const GuestWrapper = styled.section`
  min-height: 100vh;
  animation: ${slideLeftToRight} 30s linear infinite;
  background: url(${(props) => props.backgroundImage}) repeat  center center/cover transparent;
`;

export const GuestContentWrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 20px;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    min-height: calc(100vh - 70px);
  }
  
`;


