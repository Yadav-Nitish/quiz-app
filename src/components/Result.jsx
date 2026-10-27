import React from 'react';
import { QUIZ_STAGES } from '../constants/constant';

const Result = ({
	score,
	setScore,
	setQuizStage,
	wrongAnswers,
	setWrongAnswers,
}) => {
	const onRestart = () => {
		setScore(0);
		setWrongAnswers([]);
		setQuizStage(QUIZ_STAGES.START);
	};

	return (
		<div className="result-screen">
			<div className="score">
				<h2>Your Score: {score}</h2>

				<h3>Wrong Answers</h3>
			</div>

			<div className="right-wrong">
				{wrongAnswers.length === 0 ? (
					<p>Perfect! No wrong answers 🎉</p>
				) : (
					wrongAnswers.map((item, index) => (
						<div
							key={`${item.question}-${index}`}
							className="wrong-answer"
						>
							<p>
								<strong>Q:</strong> {item.question}
							</p>

							<p style={{ color: 'red' }}>
								Your Answer: {item.selected}
							</p>

							<p style={{ color: 'green' }}>
								Correct Answer: {item.correct}
							</p>

							<hr />
						</div>
					))
				)}
			</div>

			<button id="restart" onClick={onRestart}>
				Choose Another Subject
			</button>
		</div>
	);
};

export default Result;