import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = (props) => {
  const location = useLocation();
  const authUser = useSelector(state => state.user.authUser);

  if (!authUser) {
    return <Navigate to="/auth" state={{ from: location.pathname }} />
  }

  return props.children;
}

PrivateRoute.propTypes = {
  children: PropTypes.any
}
