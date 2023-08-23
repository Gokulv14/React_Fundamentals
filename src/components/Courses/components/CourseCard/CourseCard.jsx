import './CourseCard.css';
import Button from '../../../../common/Button/Button';
import { handleDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';

function CourseCard(props) {
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
					<Button
						name='SHOW COURSE'
						onClickFn={() =>
							props.handleShowCourse(props.coursesData, props.authorList)
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
