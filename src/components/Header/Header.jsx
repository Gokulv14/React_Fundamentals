import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import './Header.css';

function Header() {
	return (
		<div className='headers'>
			<Logo />
			<Button name='LOGOUT' onClickFn={() => {}} />
		</div>
	);
}

export default Header;
