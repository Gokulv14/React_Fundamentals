import { useEffect, useState } from 'react';
import CourseInfo from '../CourseInfo/CourseInfo';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import './Courses.css';
import { Outlet } from 'react-router-dom';
import { makeRequest } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { GET_COURSES } from '../../store/courses/actions';
import { GET_AUTHORS } from '../../store/authors/actions';
import { getAuthors, getCourses } from '../../store/selector';

function Courses() {
	const dispatch = useDispatch();
	const [courseInfo, setCourseInfo] = useState({
		showCourseInfo: false,
		courseDetails: null,
		authorList: null,
	});

	const coursesList = useSelector(getCourses);
	const authorsList = useSelector(getAuthors);

	const handleShowCourseInfo = (course, author) => {
		setCourseInfo({
			showCourseInfo: !courseInfo.showCourseInfo,
			courseDetails: course,
			authorList: author,
		});
	};

	useEffect(() => {
		async function fetchCourseAndAuthorsList() {
			try {
				const response = await makeRequest('/authors/all');
				const res = await response.json();

				dispatch(GET_AUTHORS(res.result));
				const resp = await makeRequest('/courses/all');
				const result = await resp.json();
				dispatch(GET_COURSES(result.result));
			} catch (e) {}
		}
		fetchCourseAndAuthorsList();
	}, []);

	const coursesCardUI = () => {
		return (
			<div>
				<SearchBar></SearchBar>
				{coursesList.length > 0 &&
					coursesList.map((val) => {
						return (
							<CourseCard
								key={val.id}
								coursesData={val}
								authorList={authorsList}
								handleShowCourse={handleShowCourseInfo}
							/>
						);
					})}
				<Outlet />
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
			) : coursesList.length !== 0 ? (
				coursesCardUI()
			) : (
				<EmptyCourseList />
			)}
		</div>
	);
}

export default Courses;
