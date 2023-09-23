import { useState } from 'react';
import Button from '../../common/Button/Button';
import { ADD_NEW_COURSE_TEXT, PERMISSION_ERR } from '../../constants';
import './EmptyCourseList.css';
import { useNavigate } from 'react-router-dom';

function EmptyCourseList() {
	const navigate = useNavigate();
	const handleRoles = localStorage.getItem('userRole');
	const [newCourse, setNewCourse] = useState('');

	const handleNewCourse = () => {
		if (handleRoles) {
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
