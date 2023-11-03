import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSelectors';
import { Container, StyledBtn, Text } from './UserMenu.styled';

function UserMenu() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <Container>
      <Text>Welcome, {userName}</Text>
      <StyledBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledBtn>
    </Container>
  );
}

export default UserMenu;
