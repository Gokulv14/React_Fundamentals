import './CourseCard.css';
import Button from '../../../../common/Button/Button';
import { handleDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import { SHOW_COURSE_BUTTON_TEXT, USER_ROLES } from '../../../../constants';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserData } from '../../../../store/selector';
import deleteIcon from '../../../../assets/deleteIcon.svg';
import updateIcon from '../../../../assets/updateIcon.svg';
function CourseCard(props) {
	const courseId = props.coursesData.id;
	const getAuthorName = (authors, coursesData) => {
		let authorName = [];
		const authorIds = coursesData.authors.map((data) => data);

		authorIds.forEach((docs, index) => {
			const name = authors[authors.findIndex((doc) => doc.id === docs)].name;
			authorName.push(name);
			if (index < authorIds.length - 1) authorName.push(', ');
		});

		return authorName;
	};
	const userInfo = useSelector(getUserData);

	return (
		<div className='course-card-component'>
			<div className='course-card-container'>
				<div className='course-card-container-left'>
					<div className='course-title'>
						<b>{props.coursesData.title}</b>
					</div>
					<div className='course-content'>
						<p>{props.coursesData.description}</p>
					</div>
				</div>
				<div className='course-card-container-right'>
					<div className='course-details'>
						<div style={{ marginBottom: '2px' }}>
							<b>Authors:</b>
							{getAuthorName(props.authorList, props.coursesData)}
						</div>
						<div style={{ marginBottom: '2px' }}>
							<b>Duration:</b> {handleDuration(props.coursesData.duration)}
						</div>
						<div style={{ marginBottom: '2px' }}>
							<b>Created:</b>{' '}
							{formatCreationDate(props.coursesData.creationDate)}
						</div>
					</div>
					<Link to={'/courses/' + courseId}>
						<Button
							className='show_Course_Button'
							name={SHOW_COURSE_BUTTON_TEXT}
							onClickFn={() =>
								props.handleShowCourse(props.coursesData, props.authorList)
							}
						/>
					</Link>
					{userInfo.role === USER_ROLES.ADMIN ? (
						<>
							<button
								className='delete-button'
								onClick={() => props.deleteCourse(courseId)}
							>
								<img src={deleteIcon} alt='delete'></img>
							</button>
							<Link to={`/courses/update/${courseId}`}>
								<button className='delete-button'>
									<img src={updateIcon} alt='delete'></img>
								</button>
							</Link>
						</>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
