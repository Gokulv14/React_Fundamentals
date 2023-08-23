import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { ADD_NEW_COURSE_TEXT, SEARCH_BUTTON_TEXT } from '../../../../constants';
import './SearchBar.css';

function SearchBar() {
	return (
		<div className='search-bar'>
			<div className='search-bar-filter'>
				<Input value='Input text' />
			</div>
			<div className='search-button'>
				<Button name={SEARCH_BUTTON_TEXT} onClickFn={() => {}} />
			</div>
			<div className='add-new-course-button'>
				<Button name={ADD_NEW_COURSE_TEXT} onClickFn={() => {}} />
			</div>
		</div>
	);
}

export default SearchBar;
