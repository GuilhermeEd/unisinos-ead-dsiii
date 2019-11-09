import store from '../store';

export const isAdmin = () => {
  const { user } = store.getState().auth;
  return user && user.tipo === 'A';
};

export const isInstitution = () => {
  const { user } = store.getState().auth;
  return user && user.tipo === 'I';
};

export const isDonator = () => {
  const { user } = store.getState().auth;
  return user && user.tipo === 'D';
};
