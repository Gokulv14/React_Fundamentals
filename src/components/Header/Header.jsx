import Button from '../../common/Button/Button';
import { LOGOUT_BUTTON_TEXT } from '../../constants';
import Logo from './components/Logo/Logo';
import './Header.css';

function Header() {
	return (
		<div className='headers'>
			<Logo />
			<Button name={LOGOUT_BUTTON_TEXT} onClickFn={() => {}} />
		</div>
	);
}

export default Header;
