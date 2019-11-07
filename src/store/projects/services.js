import http from '../../utils/http';

export const createProject = payload => {
  return http.post('/newproject.php', payload).then(res => res.data);
};
