import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseForm from './components/CourseForm/CourseForm';
import { ProtectedRoute } from './helpers/protectedRoute';
import { PrivateRoute } from './components/Private/PrivateRoute';

function App() {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Routes>
						<Route
							path='/'
							element={<Navigate to='courses' replace={true} />}
						/>
						<Route path='registration' element={<Registration />} />
						<Route path='login' element={<Login />} />
						<Route
							path='courses'
							element={
								<ProtectedRoute>
									<Courses />
								</ProtectedRoute>
							}
						>
							<Route
								path=':courseId'
								element={
									<ProtectedRoute>
										<CourseInfo />
									</ProtectedRoute>
								}
							/>
						</Route>
						<Route
							path='courses/add'
							element={
								<PrivateRoute>
									<CourseForm />
								</PrivateRoute>
							}
						/>
						<Route
							path='courses/update/:courseId'
							element={
								<PrivateRoute>
									<CourseForm />
								</PrivateRoute>
							}
						/>
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
