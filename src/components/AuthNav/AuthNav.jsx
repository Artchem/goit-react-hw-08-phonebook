import { StyledNavLink } from './AuthNav.styled';

function AuthNav() {
  return (
    <>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </>
  );
}

export default AuthNav;
