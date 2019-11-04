import React from 'react';
import { Router } from 'react-router-dom';

import history from './history';
import AppRoutes from './Routes';

const Routes = () => {
  return (
    <Router history={history}>
      <AppRoutes />
    </Router>
  );
};

export default Routes;
