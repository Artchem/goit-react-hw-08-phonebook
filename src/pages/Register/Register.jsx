import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './Register.styled';

function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled>
        Username
        <InputStyled type="text" name="name" />
      </LabelStyled>
      <LabelStyled>
        Email
        <InputStyled type="email" name="email" />
      </LabelStyled>
      <LabelStyled>
        Password
        <InputStyled type="password" name="password" />
      </LabelStyled>
      <ButtonStyled type="submit">Register</ButtonStyled>
    </FormStyled>
  );
}

export default Register;
