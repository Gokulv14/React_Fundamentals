import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { ADD_NEW_COURSE_TEXT, SEARCH_BUTTON_TEXT } from '../../../../constants';
import './SearchBar.css';
import { Link } from 'react-router-dom';

function SearchBar() {
	const handleRoles = localStorage.getItem('userRole');

	return (
		<div className='search-bar'>
			<div className='search-bar-filter'>
				<Input placeholder='Input text' />
			</div>
			<div className='search-button'>
				<Button
					className='button'
					name={SEARCH_BUTTON_TEXT}
					onClickFn={() => {}}
				/>
			</div>
			{handleRoles ? (
				<div className='add-new-course-button'>
					<Link to={'/courses/add'}>
						<Button
							className='button'
							name={ADD_NEW_COURSE_TEXT}
							onClickFn={() => {}}
						/>
					</Link>
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default SearchBar;
