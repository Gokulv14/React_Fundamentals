function Input(props) {
	return (
		<input
			className='search-bar-text'
			type={props.type}
			name={props.name}
			value={props.value}
			onChange={() => {}}
		/>
	);
}

export default Input;
