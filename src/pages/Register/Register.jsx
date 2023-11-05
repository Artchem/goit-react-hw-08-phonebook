import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
import { register } from 'redux/auth/authOperations';
import { selectAuthLoading } from 'redux/auth/authSelectors';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './Register.styled';

function Register() {
  const dispatch = useDispatch();
  // const error = useSelector(selectAuthError);
  const isLoading = useSelector(selectAuthLoading);
  // console.log('error :>> ', error);

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
    <>
      {isLoading && <Loader />}
      {/* {error && <div>{error}</div>} */}
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
    </>
  );
}

export default Register;
