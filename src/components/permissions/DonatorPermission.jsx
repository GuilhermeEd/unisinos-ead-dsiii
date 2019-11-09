import { useSelector } from 'react-redux';

const DonatorPermission = ({ children }) => {
  const { user } = useSelector(state => state.auth);
  const hasPermission = user && user.tipo === 'D';
  return hasPermission ? children : null;
};

export default DonatorPermission;
