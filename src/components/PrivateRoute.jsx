import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export const PrivateRoute = (props) => {

  const auth = true;

  if (!auth.user) {
    return <Navigate to="/auth" />
  }

  return props.children;
}

PrivateRoute.propTypes = {
  children: PropTypes.any
}
