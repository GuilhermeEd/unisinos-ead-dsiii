import { useSelector } from 'react-redux';

const AdminPermission = ({ children }) => {
  const { user } = useSelector(state => state.auth);
  const hasPermission = user && user.tipo === 'A';
  return hasPermission ? children : null;
};

export default AdminPermission;
