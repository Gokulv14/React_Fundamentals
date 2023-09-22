import './Registration.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { INTERNAL_SERVER_ERR, COURSES_BACKEND_URL } from '../../constants';

function Registration() {
	const navigate = useNavigate();
	const initialValues = { name: '', email: '', password: '' };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [apiErrors, setApiErrors] = useState('');

	const handleInputChange = (event) => {
		const { id, value } = event.target;
		setFormValues({ ...formValues, [id]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		registerUser();
	};

	const registerUser = async () => {
		const newUser = {
			name: formValues.name,
			email: formValues.email,
			password: formValues.password,
		};

		try {
			const response = await fetch(`${COURSES_BACKEND_URL}/register`, {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const result = await response.json();
			if (result.successful) {
				navigate('/login');
			} else {
				const error = result.result ? result.result : result.errors[0];
				setApiErrors(error);
			}
		} catch (err) {
			setApiErrors(INTERNAL_SERVER_ERR);
		}
	};

	const validate = (value) => {
		const errors = {};

		if (!value.name) {
			errors.name = 'Name is required';
		}

		if (!value.email) {
			errors.email = 'Email is required';
		}

		if (!value.password) {
			errors.password = 'Password is required';
		}

		if (Object.keys(errors).length === 0) {
			registerUser();
		}
		return errors;
	};

	return (
		<div className='registration-component'>
			<div className='registration-form-name'>
				<h3>Registration</h3>
			</div>
			<div className='registration-form'>
				<div className='registration-input'>
					<form id='registerForm' onSubmit={handleSubmit}>
						<Input
							placeholder='Input text'
							name='Name'
							type='text'
							id='name'
							onChange={handleInputChange}
							value={formValues.name}
						/>
						<p className='validation-error'>{formErrors.name}</p>
						<Input
							placeholder='Input text'
							name='Email'
							type='text'
							id='email'
							onChange={handleInputChange}
							value={formValues.email}
						/>
						<p className='validation-error'>{formErrors.email}</p>
						<Input
							placeholder='Input text'
							name='Password'
							type='password'
							id='password'
							onChange={handleInputChange}
							value={formValues.password}
						/>
						<p className='validation-error'>{formErrors.password}</p>
						<Button
							className='button'
							type='submit'
							name='LOGIN'
							onClickFn={() => {}}
						/>
						<p className='validation-error'>{apiErrors}</p>
					</form>
					<div>
						<span className='login-page-link'>
							If you have an account you may{' '}
							<Link to='/login'>
								<b>Login</b>
							</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Registration;
