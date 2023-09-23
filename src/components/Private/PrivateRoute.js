import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserData } from '../../store/selector';
import { USER_ROLES } from '../../constants';

export const PrivateRoute = ({ children }) => {
	const userInfo = useSelector(getUserData);
	if (userInfo.role !== USER_ROLES.ADMIN) {
		return <Navigate to='/courses' />;
	}
	return children;
};
