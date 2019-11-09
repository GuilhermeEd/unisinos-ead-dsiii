import { useSelector } from 'react-redux';

const InstitutionPermission = ({ children }) => {
  const { user } = useSelector(state => state.auth);
  const hasPermission = user && user.tipo === 'I';
  return hasPermission ? children : null;
};

export default InstitutionPermission;
