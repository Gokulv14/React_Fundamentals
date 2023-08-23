import './Button.css';

function Button(props) {
	return (
		<button className='button' onClick={() => props.onClickFn()}>
			{props.name}
		</button>
	);
}

export default Button;
