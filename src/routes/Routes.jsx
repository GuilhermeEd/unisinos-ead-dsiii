import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import reverse from 'lodash/reverse';

import LoginPage from '../pages/LoginPage';
import { isAdmin, isDonator, isInstitution } from '../utils/permissions';

import TemplateRoute from './TemplateRoute';
import history from './history';
import { adminPaths, institutionPaths, donatorPaths, publicPaths } from './paths';

const withQuery = url => `${url}${history.location.search}`;

const Routes = ({ user }) => {
  const privatePaths = useMemo(
    () => [
      ...(isAdmin() ? adminPaths : []),
      ...(isInstitution() ? institutionPaths : []),
      ...(isDonator() ? donatorPaths : [])
    ],
    [user]
  );

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

  const routesPrecedence = [...privatePaths.map(setPrivateRoute), ...publicPaths.map(setRoute)];

  const routes = user ? routesPrecedence : reverse(routesPrecedence);

  const notFoundRedirect = () => (
    <Redirect to={defaultPath ? withQuery(defaultPath.name) : withQuery('/')} />
  );

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
