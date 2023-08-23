import Button from '../../common/Button/Button';
import './EmptyCourseList.css';

function EmptyCourseList() {
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
				<Button name='ADD NEW COURSE' onClickFn={() => {}} />
			</div>
		</div>
	);
}

export default EmptyCourseList;
