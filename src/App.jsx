import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import { mockedCoursesList, mockedAuthorsList } from './../src/constants';

function App() {
	return (
		<div>
			<Header></Header>
			<Courses
				coursesList={mockedCoursesList}
				authorList={mockedAuthorsList}
			></Courses>
		</div>
	);
}

export default App;
