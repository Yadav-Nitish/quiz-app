import React from 'react';

const Option = ({
	data,
	correctOption,
	selectedOption,
	setSelectedOption,
}) => {
	return (
		<button
			className={`option ${
				selectedOption &&
				(data === correctOption
					? 'correct'
					: data === selectedOption
					? 'incorrect'
					: '')
			}`}
			onClick={() => setSelectedOption(data)}
			disabled={!!selectedOption}
		>
			{data}
		</button>
	);
};

export default Option;