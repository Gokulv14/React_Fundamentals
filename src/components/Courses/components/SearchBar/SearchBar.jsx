import Button from '../../../../common/Button/Button';
import './SearchBar.css';

function SearchBar() {
	return (
		<div className='search-bar'>
			<div className='search-bar-filter'>
				<span className='search-bar-text'>Input text</span>
			</div>
			<div className='search-button'>
				<Button name='SEARCH' onClickFn={() => {}} />
			</div>
			<div className='add-new-course-button'>
				<Button name='ADD NEW COURSE' onClickFn={() => {}} />
			</div>
		</div>
	);
}

export default SearchBar;
