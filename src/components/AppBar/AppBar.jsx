import Navigation from 'components/Navigation/Navigation';
import { StyledHeader } from './AppBar.styled';

function AppBar() {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
}

export default AppBar;
