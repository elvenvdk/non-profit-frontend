import React from 'react';
import { useGlobal } from 'reactn';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [userId] = useGlobal('userId');
  return (
    <Route
      {...rest}
      render={(props) =>
        userId ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/auth/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
