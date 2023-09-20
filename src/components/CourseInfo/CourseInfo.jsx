import Button from '../../common/Button/Button';
import './CourseInfo.css';
import { handleDuration } from '../../helpers/getCourseDuration';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { BACK_BUTTON_TEXT } from '../../constants';
import { Link } from 'react-router-dom';

function CourseInfo(props) {
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
		<div className='course-info'>
			<div className='course-info-name'>
				<h3>{props.coursesData.title}</h3>
			</div>
			<div className='course-info-container'>
				<div className='course-info-container-left'>
					<div className='course-info-description'>
						<b>Description:</b>
					</div>
					<div className='course-info-content'>
						<p>{props.coursesData.description}</p>
					</div>
				</div>
				<div className='course-info-container-right'>
					<div className='course-info-container-right-id'>
						<b>ID: </b>&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
						{props.coursesData.id}
					</div>
					<div className='course-info-container-right-duration'>
						<b>Duration:</b>&emsp; {handleDuration(props.coursesData.duration)}
					</div>
					<div className='course-info-container-right-created'>
						<b>Created:</b> &emsp;&nbsp;&nbsp;
						{formatCreationDate(props.coursesData.creationDate)}
					</div>
					<div className='course-info-container-right-authors'>
						<b>Authors:</b>&emsp;&nbsp;&nbsp;&nbsp;
						{getAuthorName(props.authorList, props.coursesData)}
					</div>
				</div>
			</div>
			<div className='back-button'>
				<Link to={'/courses'}>
					<Button
						name={BACK_BUTTON_TEXT}
						onClickFn={() =>
							props.handleShowCourse(props.coursesData, props.authorList)
						}
					/>
				</Link>
			</div>
		</div>
	);
}

export default CourseInfo;
