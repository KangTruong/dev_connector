import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import colorConfig from 'baseConfig/globalColor';
import { device } from 'baseConfig/globalStyles';

const getThemeLink = (props) => {
  const { theme } = props;
  let background;
  let text;

  switch (theme) {
    case 'primary':
      background = colorConfig.primary;
      text = colorConfig.whiteColor;
      break;
    
    case 'dark':
      background = colorConfig.secondary;
      text = colorConfig.whiteColor;
      break;
  
    default:
      background = colorConfig.whiteColor;
      text = colorConfig.primary;
      break;
  }
  return { background, text };
}

export const ButtonLinkWrapper = styled(Link)`
  padding: 0 20px;
  line-height: 36px;
  border-radius: 3px;
  font-weight: bold;
  display: inline-block;
  
  ${(props) => {
    const { background, text} = getThemeLink(props);
    return css`
      background-color: ${background};
      color: ${text};
    `;
  }}

  ${(props) => props.margin && css`
    margin: ${props.margin};
  `}

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const getThemeButton = (props) => {
  const { theme } = props;
  let background;
  let text;

  switch (theme) {
    case 'primary':
      background = colorConfig.primary;
      text = colorConfig.whiteColor;
      break;
    
    case 'dark':
      background = colorConfig.secondary;
      text = colorConfig.whiteColor;
      break;
  
    default:
      background = colorConfig.whiteColor;
      text = colorConfig.primary;
      break;
  }
  return { background, text };
}
export const ButtonWrapper = styled.button`
  padding: 0 20px;
  line-height: 36px;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  outline: 0 none;
  border: 0 none;
  font-size: 13px;

  ${(props) => {
    const { background, text} = getThemeButton(props);
    return css`
      background-color: ${background};
      color: ${text};
    `;
  }}

  ${(props) => props.width && css`
    width: ${props.width};
  `};
`;