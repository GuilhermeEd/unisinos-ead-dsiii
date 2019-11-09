import http from '../../utils/http';

export const login = credentials => {
  return http.post('/login', credentials).then(res => res.data);
};

export const getUser = id => {
  const params = {
    user: id
  };

  return http.get('/getuser.php', { params }).then(res => res.data[0]);
};
