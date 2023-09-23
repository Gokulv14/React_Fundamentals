import { useState } from 'react';
import Button from '../../common/Button/Button';
import {
	ADD_NEW_COURSE_TEXT,
	PERMISSION_ERR,
	USER_ROLES,
} from '../../constants';
import './EmptyCourseList.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserData } from '../../store/selector';

function EmptyCourseList() {
	const navigate = useNavigate();
	const userInfo = useSelector(getUserData);
	const handleRoles = userInfo.role;
	const [newCourse, setNewCourse] = useState('');

	const handleNewCourse = () => {
		if (handleRoles === USER_ROLES.ADMIN) {
			navigate('/courses/add');
			setNewCourse('');
		} else {
			setNewCourse(PERMISSION_ERR);
		}
	};

	return (
		<div className='empty-course-wrapper'>
			<div className='empty-course-list'>
				<div className='empty-list-content'>
					<h3>Your List Is Empty</h3>
				</div>
				<div className='new-course-option'>
					<span>
						Please use ’Add New Course’ button to add your first course
					</span>
				</div>
				<Button
					className='button'
					name={ADD_NEW_COURSE_TEXT}
					onClickFn={handleNewCourse}
				/>
				{newCourse ? <p className='add-course-permissions'>{newCourse}</p> : ''}
			</div>
		</div>
	);
}

export default EmptyCourseList;
