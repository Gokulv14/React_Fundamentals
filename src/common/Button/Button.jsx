import './Button.css';

function Button(props) {
	return (
		<button className='button' onClick={(e) => props.onClickFn(e)}>
			{props.name}
		</button>
	);
}

export default Button;
