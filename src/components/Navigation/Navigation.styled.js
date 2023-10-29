import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-align: center;
  height: 20px;
  width: 100px;
  padding: 5px;
  margin-right: auto;
  color: #3f3f3f;
  text-decoration: none;
  border: 1px solid gray;
  border-radius: 5px;
  &:hover {
    color: navy;
    border-color: navy;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  color: black;
  &.active {
    color: orangered;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: auto;

  gap: 20px;
`;
