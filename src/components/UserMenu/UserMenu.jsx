import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSelectors';

function UserMenu() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
