import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/user/sign-in" />
        ) : (
            user != null &&
              !user.isActive && !loading ?
              <Redirect to="/verify" />

              :
              <Component {...props} />
          )
      }
    />
  );
const mapStateToProps = (state) => ({
  auth: state.app,
});
export default connect(mapStateToProps)(PrivateRoute);
