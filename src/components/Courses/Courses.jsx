import { useEffect, useState } from 'react';
import CourseInfo from '../CourseInfo/CourseInfo';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import './Courses.css';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors, getCourses } from '../../store/selector';
import { INTERNAL_SERVER_ERR } from '../../constants';
import { getUserProfile } from '../../store/user/thunk';
import { getAllCourses, deleteCourses } from '../../store/courses/thunk';
import { getAllAuthors } from '../../store/authors/thunk';

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
		await dispatch(deleteCourses(id));
	};

	useEffect(() => {
		async function fetchCourseAndAuthorsList() {
			try {
				await dispatch(getUserProfile());
				await dispatch(getAllAuthors());
				await dispatch(getAllCourses());
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
