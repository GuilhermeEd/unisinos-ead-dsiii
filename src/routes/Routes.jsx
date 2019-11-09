import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import reverse from 'lodash/reverse';

import LoginPage from '../pages/LoginPage';

import TemplateRoute from './TemplateRoute';
import { privatePaths, publicPaths } from './paths';

const Routes = ({ user }) => {
  const defaultPath = user
    ? privatePaths.find(path => !!path.default)
    : publicPaths.find(path => !!path.default);

  const setRoute = path =>
    path.template ? (
      <TemplateRoute
        key={path.name}
        path={path.name}
        exact
        component={path.component}
        template={path.template}
      />
    ) : (
      <Route
        exact
        key={path.name}
        path={path.name}
        component={path.component}
        template={path.template}
      />
    );

  const setPrivateRoute = path =>
    setRoute({
      ...path,
      template: user ? path.template : undefined,
      component: user ? path.component : LoginPage
    });

  const setRedirect = path => (
    <Redirect exact key={path.name} from={path.name} to={defaultPath ? defaultPath.name : '/'} />
  );

  const routesPrecedence = [
    ...privatePaths.map(setPrivateRoute),
    ...publicPaths.map(user ? setRedirect : setRoute)
  ];

  const routes = user ? routesPrecedence : reverse(routesPrecedence);

  const notFoundRedirect = () => <Redirect to={defaultPath ? defaultPath.name : '/'} />;

  return (
    <Switch>
      {routes}
      <Route component={notFoundRedirect} />
    </Switch>
  );
};

Routes.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    token: PropTypes.string,
    role: PropTypes.string
  })
};

Routes.defaultProps = {
  user: null
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps)
);

export default enhance(Routes);
