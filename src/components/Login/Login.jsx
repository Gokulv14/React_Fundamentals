import './Login.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { INTERNAL_SERVER_ERR, COURSES_BACKEND_URL } from '../../constants';
import { useDispatch } from 'react-redux';
import { SAVE_USERINFO } from '../../store/user/actions';

function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const initialValues = { email: '', password: '' };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [apiErrors, setApiErrors] = useState('');

	const handleInputChange = (event) => {
		const { id, value } = event.target;
		setFormValues({ ...formValues, [id]: value });
		setApiErrors('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
	};

	const loginUser = async () => {
		const userInfo = {
			email: formValues.email,
			password: formValues.password,
		};
		try {
			const result = await fetch(`${COURSES_BACKEND_URL}/login`, {
				method: 'POST',
				body: JSON.stringify(userInfo),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const response = await result.json();
			if (response.successful) {
				dispatch(
					SAVE_USERINFO({
						name: response.user.name,
						token: response.result,
						email: formValues.email,
					})
				);
				localStorage.setItem('userToken', response.result);
				localStorage.setItem('userRole', 'admin');
				navigate('/courses');
			} else {
				const error = response.result ? response.result : response.errors[0];
				setApiErrors(error);
			}
		} catch (err) {
			setApiErrors(INTERNAL_SERVER_ERR);
		}
	};

	const validate = (value) => {
		const errors = {};
		if (!value.email) {
			errors.email = 'Email is required';
		}

		if (!value.password) {
			errors.password = 'Password is required';
		}

		if (Object.keys(errors).length === 0) {
			loginUser();
		}

		return errors;
	};

	return (
		<div className='login-component'>
			<div className='login-form-name'>
				<h3>Login</h3>
			</div>
			<div className='login-form'>
				<div className='login-input'>
					<form id='loginForm' onSubmit={handleSubmit}>
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
					<div className='registration-link-input'>
						<span>
							If you don't have an account you may <br />
							<div className='test'>
								<Link to='/Registration'>
									<b>Registration</b>
								</Link>
							</div>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
