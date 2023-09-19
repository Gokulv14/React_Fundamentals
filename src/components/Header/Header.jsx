import Button from '../../common/Button/Button';
import { LOGOUT_BUTTON_TEXT } from '../../constants';
import Logo from './components/Logo/Logo';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
	const isAuthenticated = localStorage.getItem('userToken');
	const navigate = useNavigate();
	let userProfile = '';
	if (isAuthenticated) {
		userProfile = localStorage.getItem('userName');
	}

	const handleLogout = () => {
		localStorage.removeItem('userToken');
		localStorage.removeItem('userName');
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
