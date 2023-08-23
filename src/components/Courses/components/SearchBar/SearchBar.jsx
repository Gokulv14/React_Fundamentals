import Button from '../../../../common/Button/Button';
import { ADD_NEW_COURSE_TEXT, SEARCH_BUTTON_TEXT } from '../../../../constants';
import './SearchBar.css';

function SearchBar() {
	return (
		<div className='search-bar'>
			<div className='search-bar-filter'>
				<span className='search-bar-text'>Input text</span>
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
