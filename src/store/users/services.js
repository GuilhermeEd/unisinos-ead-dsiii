import http from '../../utils/http';

export const createUser = payload => {
  return http.post('/newuser.php', payload).then(res => res.data);
};

export const fetchUsers = query => {
  const params = {
    ...query
  };

  return http.get('/listusers.php', { params }).then(res => res.data);
};

export const updateUser = payload => {
  const params = {
    codigo_usuario: payload.user
  };

  return http.post('/updateuser.php', payload, { params }).then(res => res.data);
};

export const fetchUser = query => {
  const params = {
    ...query
  };

  return http.get('/edituser.php', { params }).then(res => res.data[0]);
};
