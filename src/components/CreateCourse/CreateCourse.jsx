import './CreateCourse.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useState } from 'react';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_COURSES } from '../../store/courses/actions';
import { getCurrentDate } from '../../helpers/formatCreationDate';
import { makePostRequest } from '../../services';
import { INTERNAL_SERVER_ERR } from '../../constants';
import { handleDuration } from '../../helpers/getCourseDuration';

function CreateCourse() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const initialValues = { title: '', description: '', duration: '' };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [authors, setAuthors] = useState([]);
	const [apiError, setApiError] = useState('');

	const handleInputChange = (event) => {
		const { id, value } = event.target;
		setFormValues({ ...formValues, [id]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
	};

	const validate = (value) => {
		const errors = {};

		if (!value.title) {
			errors.title = 'Title is required';
		} else if (value.title.length < 2) {
			errors.title = 'Text length should be at least 2 characters';
		}

		if (!value.description) {
			errors.description = 'Description is required';
		} else if (value.description.length < 2) {
			errors.description = 'Text length should be at least 2 characters';
		}

		if (!value.duration) {
			errors.duration = 'Duration is required';
		} else if (value.duration < 1) {
			errors.duration = 'Duration should be more than 0 minutes';
		}

		if (Object.keys(errors).length === 0) {
			const createCoursePayload = {
				title: formValues.title,
				description: formValues.description,
				duration: Number(formValues.duration),
				authors,
				creationDate: getCurrentDate(),
			};
			saveCourses(createCoursePayload)
				.then((data) => {
					dispatch(ADD_COURSES(data.result));
					navigate('/courses');
				})
				.catch((err) => {});
		}
		return errors;
	};

	const saveCourses = async (payload) => {
		try {
			const response = await makePostRequest(`/courses/add`, payload);
			const res = response.json();
			return res;
		} catch (err) {
			setApiError(INTERNAL_SERVER_ERR);
		}
	};

	const getAuthorIds = (authorId) => {
		const ids = authorId.map((auth) => auth.id);
		setAuthors(ids);
	};

	return (
		<div className='create-course-component'>
			<div>
				<div className='create-course-form-name'>
					<h3>Course Edit/Create Page</h3>
				</div>
				<div className='create-course-container'>
					<div className='create-course-input-list'>
						<div className='headings-input'>
							<p>Main Info</p>
						</div>
						<div className='title-input'>
							<Input
								className='course-title'
								type='text'
								placeholder='Input text'
								name='Title'
								id='title'
								onChange={handleInputChange}
							/>
							<p className='validation-error'>{formErrors.title}</p>
						</div>
						<div className='title-input'>
							<Input
								className='course-description'
								type='text'
								placeholder='Input text'
								name='Description'
								id='description'
								onChange={handleInputChange}
							/>
							<p className='validation-error'>{formErrors.description}</p>
						</div>
						<div className='headings-input'>
							<p>Duration</p>
						</div>
						<div className='title-input'>
							<Input
								className='duration-input'
								type='number'
								placeholder='Input text'
								name='Duration'
								id='duration'
								onChange={handleInputChange}
							/>
							&emsp;&emsp;
							<span>
								<b>{handleDuration(formValues.duration)}</b>
							</span>
							<p className='validation-error'>{formErrors.duration}</p>
						</div>
						<AuthorItem getAuthorIds={getAuthorIds} />
						<p className='api-validation-error'>{apiError}</p>
					</div>
				</div>
				<div className='create-course-buttons'>
					<Link to={'courses'}>
						<Button className='button' name='CANCEL' onClickFn={() => {}} />
					</Link>
					<Button
						className='button'
						name='CREATE COURSE'
						onClickFn={handleSubmit}
					/>
				</div>
			</div>
		</div>
	);
}

export default CreateCourse;
