import Button from '../../common/Button/Button';
import { LOGOUT_BUTTON_TEXT } from '../../constants';
import Logo from './components/Logo/Logo';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserData } from '../../store/selector';

function Header() {
	const isAuthenticated = localStorage.getItem('userToken');
	const navigate = useNavigate();
	const userInfo = useSelector(getUserData);
	let userProfile = '';
	userProfile = userInfo.name;

	const handleLogout = () => {
		localStorage.removeItem('userToken');
		localStorage.removeItem('userRole');
		navigate('/login');
	};
	return (
		<div className='headers'>
			<Logo />
			<p className='profile-name'>{userProfile}</p>
			{isAuthenticated ? (
				<Button name={LOGOUT_BUTTON_TEXT} onClickFn={handleLogout} />
			) : (
				''
			)}
		</div>
	);
}

export default Header;
