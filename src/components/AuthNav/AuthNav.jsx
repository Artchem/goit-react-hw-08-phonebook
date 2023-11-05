import { StyledNav, StyledNavLink } from './AuthNav.styled';

function AuthNav() {
  return (
    <StyledNav>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </StyledNav>
  );
}

export default AuthNav;
