import { useDispatch } from 'react-redux';
import { authLogIn } from 'redux/auth/authOperations';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './Login.styled';

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authLogIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled>
        Email
        <InputStyled type="email" name="email" />
      </LabelStyled>
      <LabelStyled>
        Password
        <InputStyled type="password" name="password" />
      </LabelStyled>
      <ButtonStyled type="submit">Log In</ButtonStyled>
    </FormStyled>
  );
}

export default Login;
