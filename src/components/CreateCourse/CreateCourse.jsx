import './CreateCourse.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useState } from 'react';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { Link, useNavigate } from 'react-router-dom';

function CreateCourse() {
	const navigate = useNavigate();
	const initialValues = { title: '', description: '', duration: '' };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});

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
			navigate('/courses');
		}

		return errors;
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
								<b>00:00</b> hours
							</span>
							<p className='validation-error'>{formErrors.duration}</p>
						</div>
						<AuthorItem />
					</div>
				</div>
				<div className='create-course-buttons'>
					<Link to={'courses'}>
						<Button name='CANCEL' onClickFn={() => {}} />
					</Link>
					<Button name='CREATE COURSE' onClickFn={handleSubmit} />
				</div>
			</div>
		</div>
	);
}

export default CreateCourse;
