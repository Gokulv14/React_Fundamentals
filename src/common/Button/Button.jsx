import './Button.css';
import clsx from 'clsx';

function Button(props) {
	const render_Show_Course_Button =
		props.className && props.className === 'show_Course_Button';
	const button = props.className && props.className === 'button';

	const inputClassName = clsx({
		show_Course: render_Show_Course_Button,
		button,
	});
	return (
		<button
			className={inputClassName}
			onClick={(e) => props.onClickFn(e)}
			id={props.id}
		>
			{props.name}
		</button>
	);
}

export default Button;
