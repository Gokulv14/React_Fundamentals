import Button from '../../common/Button/Button';
import { LOGOUT_BUTTON_TEXT } from '../../constants';
import Logo from './components/Logo/Logo';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../../store/selector';
import { RESET_USERINFO } from '../../store/user/actions';
import { RESET_AUTHORS } from '../../store/authors/actions';
import { RESET_COURSES } from '../../store/courses/actions';

function Header() {
	const isAuthenticated = localStorage.getItem('userToken');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userInfo = useSelector(getUserData);
	let userProfile = '';
	userProfile = userInfo.name;

	const handleLogout = () => {
		localStorage.removeItem('userToken');
		localStorage.removeItem('userRole');
		dispatch(RESET_USERINFO());
		dispatch(RESET_COURSES());
		dispatch(RESET_AUTHORS());
		navigate('/login');
	};
	return (
		<div className='headers'>
			<Logo />
			<p className='profile-name'>{userProfile}</p>
			{isAuthenticated ? (
				<Button
					className='button'
					name={LOGOUT_BUTTON_TEXT}
					onClickFn={handleLogout}
				/>
			) : (
				''
			)}
		</div>
	);
}

export default Header;
