import http from '../../utils/http';

export const createProject = payload => {
  const params = {
    codigo_usuario: payload.user
  };

  return http.post('/newproject.php', payload, { params }).then(res => res.data);
};

export const fetchProjects = query => {
  const params = {
    ...query
  };

  return http.get('/listprojects.php', { params }).then(res => res.data);
};

export const deleteProject = id => {
  const params = {
    codigo_projeto: id
  };

  return http.delete('/deleteproject.php', { params }).then(res => res.data);
};

export const updateProject = payload => {
  const params = {
    codigo_usuario: payload.user
  };

  return http.post('/updateproject.php', payload, { params }).then(res => res.data);
};

export const fetchProject = query => {
  const params = {
    ...query
  };

  return http.get('/editproject.php', { params }).then(res => res.data);
};
