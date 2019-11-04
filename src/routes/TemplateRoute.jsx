import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

const TemplateRoute = ({ component: Component, template: Template, ...rest }) => {
  const renderRoute = props => (
    <Template {...props}>
      <Component {...props} />
    </Template>
  );

  return <Route {...rest} render={renderRoute} />;
};

TemplateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  template: PropTypes.node.isRequired
};

export default TemplateRoute;
