import styled from 'styled-components';
import colorConfig from 'baseConfig/globalColor';
import { device } from 'baseConfig/globalStyles';

export const ForWrapper = styled.form`
  position: relative;
  margin: 30px auto;
  padding: 20px;
  text-align: center;
  width: 100%;
  max-width: 450px;
  border-radius: 5px;
  border: 1px solid ${colorConfig.borderColor};
  background-color: ${colorConfig.whiteColor};
  color: ${colorConfig.formColor};
`;

export const FormTitle = styled.div`
  margin: 10px 0 30px;

  h1 {
    color: ${colorConfig.titleColor};
    font-size: 24px;
  }

  @media ${device.tablet} {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 14px;
    }
  }

`;

export const FormGroup = styled.div`
  margin: 20px 0 40px;
  position: relative;

  label {
    top: -16px;
    left: 10px;
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 10px 0;
    transition: border-color 0.5s ease;
    color: ${colorConfig.textColor};
    background-color: ${colorConfig.whiteColor};
  }
  input {
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    transition: border-color 0.5s ease;
    border: 1px solid ${colorConfig.textColor};

    &:focus {
      border-color: ${colorConfig.primary};

      + label {
        color: ${colorConfig.darkColor};
      }
    }
  }
`;