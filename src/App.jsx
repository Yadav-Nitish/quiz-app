import './App.css';
import { useState } from 'react';

import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';

import { QUIZ_STAGES } from './constants/constant';

import appointment from './data/appointment';
import award from './data/award';
import shift from './data/shift';
import sport from './data/sport';
import militryExercise from './data/MilitryExercise';
import RamsarSite from './data/RamsarSite';
import days from './data/days';
import static1 from './data/static1';

// Each subject is connected to its own question file
const SUBJECTS = {
	static1:static1,
	appointment: appointment,
	award: award,
	sport: sport,
	shift: shift,
	militryExercise:militryExercise,
	RamsarSite:RamsarSite,
	days:days,
};

const App = () => {
	const [quizStage, setQuizStage] = useState(QUIZ_STAGES.START);
	const [score, setScore] = useState(0);
	const [wrongAnswers, setWrongAnswers] = useState([]);
	const [selectedSubject, setSelectedSubject] = useState('');

	// Reset the previous quiz whenever a new subject is started
	const handleSetQuizStage = (stage) => {
		if (stage === QUIZ_STAGES.IN_PROGRESS) {
			setScore(0);
			setWrongAnswers([]);
		}

		setQuizStage(stage);
	};

	return (
		<div>
			{quizStage === QUIZ_STAGES.START ? (
				<Start
					setQuizStage={handleSetQuizStage}
					setSelectedSubject={setSelectedSubject}
				/>
			) : quizStage === QUIZ_STAGES.IN_PROGRESS ? (
				<Quiz
					key={selectedSubject}
					questions={SUBJECTS[selectedSubject] || []}
					score={score}
					setScore={setScore}
					setQuizStage={setQuizStage}
					wrongAnswers={wrongAnswers}
					setWrongAnswers={setWrongAnswers}
				/>
			) : (
				<Result
					score={score}
					setScore={setScore}
					setQuizStage={setQuizStage}
					wrongAnswers={wrongAnswers}
					setWrongAnswers={setWrongAnswers}
				/>
			)}
		</div>
	);
};

export default App;