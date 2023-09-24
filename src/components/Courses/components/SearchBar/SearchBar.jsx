import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import {
	ADD_NEW_COURSE_TEXT,
	SEARCH_BUTTON_TEXT,
	USER_ROLES,
} from '../../../../constants';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserData } from '../../../../store/selector';

function SearchBar() {
	const userInfo = useSelector(getUserData);

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
			{userInfo.role === USER_ROLES.ADMIN ? (
				<div className='add-new-course-button'>
					<Link to={'/courses/add'}>
						<Button
							className='button'
							name={ADD_NEW_COURSE_TEXT}
							onClickFn={() => {}}
							id='ADD_NEW_COURSE'
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
