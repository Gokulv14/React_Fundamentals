import { useEffect, useState } from 'react';
import CourseInfo from '../CourseInfo/CourseInfo';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import './Courses.css';
import { Outlet } from 'react-router-dom';
import { makeDeleteRequest, makeGetRequest } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_COURSES, GET_COURSES } from '../../store/courses/actions';
import { GET_AUTHORS } from '../../store/authors/actions';
import { getAuthors, getCourses } from '../../store/selector';
import { INTERNAL_SERVER_ERR } from '../../constants';

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

	const deleteCourse = async (id) => {
		await makeDeleteRequest(`/courses/${id}`);
		dispatch(DELETE_COURSES(id));
	};

	useEffect(() => {
		async function fetchCourseAndAuthorsList() {
			try {
				const response = await makeGetRequest('/authors/all');
				const res = await response.json();

				dispatch(GET_AUTHORS(res.result));
				const resp = await makeGetRequest('/courses/all');
				const result = await resp.json();
				dispatch(GET_COURSES(result.result));
			} catch (e) {
				alert(INTERNAL_SERVER_ERR);
			}
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
								deleteCourse={deleteCourse}
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
