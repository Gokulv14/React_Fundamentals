export const handleDuration = (duration) => {
	const hour = Math.floor(duration / 60);
	const min = Math.floor(duration % 60);
	const actualDuration = `${hour < 10 ? '0' + hour : hour}:${
		min < 10 ? '0' + min : min
	} hours`;
	return actualDuration;
};
