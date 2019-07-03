import styled from 'styled-components';
import colorConfig from 'baseConfig/globalColor';

export const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 20px;
  justify-content: space-between;
  background-color: ${colorConfig.secondary};

  a {
    font-weight: bold;
    color: ${colorConfig.whiteColor}
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
`;

export const MenuWrapper = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  padding-left: 15px;

  a {
    font-size: 16px;

    &.active {
      color: ${colorConfig.primary};
    }
  }
`;