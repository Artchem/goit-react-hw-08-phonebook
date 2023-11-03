import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Container } from './Home.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      {isLoggedIn ? (
        <h2>Save your contacts with pleasure!</h2>
      ) : (
        <h2>To get started, please log in!</h2>
      )}
    </Container>
  );
}
