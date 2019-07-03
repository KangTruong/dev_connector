import styled from 'styled-components';
import colorConfig from 'baseConfig/globalColor';

export const FormGroupWrapper = styled.div`
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
    color: ${colorConfig.formColor};
    background-color: ${colorConfig.whiteColor};
  }
  input {
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    transition: border-color 0.5s ease;
    border: 1px solid ${colorConfig.borderColor};

    &:focus {
      border-color: ${colorConfig.secondary};

      + label {
        color: ${colorConfig.secondary};
      }
    }
  }
`;