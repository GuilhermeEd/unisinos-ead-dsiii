import http from '../../utils/http';

export const createDonation = payload => {
  const params = {
    codigo_usuario: payload.user
  };

  return http.post('/newdonation.php', payload, { params }).then(res => res.data);
};

export const fetchProjects = query => {
  const params = {
    ...query
  };

  return http.get('/listprojectsdonation.php', { params }).then(res => res.data);
};
