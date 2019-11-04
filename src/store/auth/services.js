import http from '../../utils/http';

const endpoint = '/auth';

export const login = credentials => {
  return http.post(endpoint, credentials).then(res => res.data);
};
