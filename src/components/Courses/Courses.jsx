import { useState } from 'react';
import CourseInfo from '../CourseInfo/CourseInfo';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import './Courses.css';

function Courses(props) {
	const [courseInfo, setCourseInfo] = useState({
		showCourseInfo: false,
		courseDetails: null,
		authorList: null,
	});

	const handleShowCourseInfo = (course, author) => {
		setCourseInfo({
			showCourseInfo: !courseInfo.showCourseInfo,
			courseDetails: course,
			authorList: author,
		});
	};

	const coursesCardUI = () => {
		return (
			<div>
				<SearchBar></SearchBar>
				{props.coursesList.length > 0 &&
					props.coursesList.map((val) => {
						return (
							<CourseCard
								key={val.id}
								coursesData={val}
								authorList={props.authorList}
								handleShowCourse={handleShowCourseInfo}
							/>
						);
					})}
			</div>
		);
	};

	return (
		<div className='courses-component'>
			{courseInfo.showCourseInfo ? (
				<CourseInfo
					coursesData={courseInfo.courseDetails}
					authorList={courseInfo.authorList}
					handleShowCourse={handleShowCourseInfo}
				/>
			) : props.coursesList.length !== 0 ? (
				coursesCardUI()
			) : (
				<EmptyCourseList />
			)}
		</div>
	);
}

export default Courses;
