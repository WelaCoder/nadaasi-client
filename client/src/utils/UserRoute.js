import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UserRoute = ({
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
            <Component {...props} />
          )
      }
    />
  );
const mapStateToProps = (state) => ({
  auth: state.app,
});
export default connect(mapStateToProps)(UserRoute);
