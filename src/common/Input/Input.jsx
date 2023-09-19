import clsx from 'clsx';
import './Input.css';

function Input(props) {
	const render_Course_desc =
		props.className && props.className === 'course-description';
	const render_Course_title =
		props.className && props.className === 'course-title';
	const render_duration_input =
		props.className && props.className === 'duration-input';

	const inputClassName = clsx({
		search_bar_text: true,
		course_description_input: render_Course_desc,
		course_title_input: render_Course_title,
		duration_input: render_duration_input,
	});

	return (
		<>
			<label htmlFor={props.name}>
				<b>{props.name}</b>
			</label>
			<input
				className={inputClassName}
				type={props.type}
				id={props.id}
				name={props.name}
				placeholder={props.placeholder}
				onChange={props.onChange}
				value={props.value}
			/>
		</>
	);
}

export default Input;
