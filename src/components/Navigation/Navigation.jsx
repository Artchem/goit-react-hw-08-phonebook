import { StyledNav, StyledNavLink } from './Navigation.styled';

function Navigation() {
  return (
    <>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>

        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      </StyledNav>
    </>
  );
}

export default Navigation;
