import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router } from 'react-router-dom';
import queryString from 'query-string';

import { getUser } from '../store/auth/actions';

import history from './history';
import AppRoutes from './Routes';

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { user: id } = queryString.parse(history.location.search);
    if (!id) {
      return history.push('/new-user');
    }

    dispatch(getUser(id));
  }, []);

  return (
    <Router history={history}>
      <AppRoutes />
    </Router>
  );
};

export default Routes;
