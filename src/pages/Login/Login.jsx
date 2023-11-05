import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { authLogIn } from 'redux/auth/authOperations';
import { selectAuthError, selectAuthLoading } from 'redux/auth/authSelectors';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './Login.styled';

function Login() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const isLoading = useSelector(selectAuthLoading);
  // console.log('error :>> ', error);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (error) {
      toast.error(`${error} `);
      return;
    }
    dispatch(
      authLogIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      {isLoading && <Loader />}
      {/* {error && toast.error(`${error}`)} */}
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
    </>
  );
}

export default Login;
