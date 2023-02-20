import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAuthUser } from "../../../store/slices";
import "./AccountMenu.scss";

export const AccountMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.user.authUser);

  const handleAuthClick = () => {
    if (!authUser) {
      navigate("/auth", { state: { authOp: "Sign In" } })
    }
    else {
      dispatch(logoutAuthUser());
    }
  }

  return (
    <div className="account">
      <div className="account__circle"></div>
      <h3 className="account__signed">
        {authUser?.name ? 'Signed in as ' : 'Not signed in'}
        <span className="account__signed--bold">{authUser?.name || ""}</span>
      </h3>
      <hr />
      <ul className="account__list">
        <li className="account__list-item">Mi cuenta</li>
        <li className="account__list-item">Mis pedidos</li>
      </ul>
      <hr />
      <button
        className="account__logout"
        onClick={handleAuthClick}
      >{authUser ? 'Log Out' : 'Log In'}</button>
    </div>
  );
};
