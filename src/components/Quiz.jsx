
import React, { useState, useEffect } from 'react';
import Option from './Option';
import { QUIZ_STAGES } from '../constants/constant';

const Quiz = ({
    questions,
    score,
    setScore,
    setQuizStage,
    wrongAnswers,
    setWrongAnswers,
}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    // Load questions in their original order without shuffling
    useEffect(() => {
        setCurrentQuestion(0);
        setSelectedOption(null);
    }, [questions]);

    // Handle empty question banks
    if (!questions || questions.length === 0) {
        return (
            <div className="quiz-wrapper">
                <p>No questions available for this subject.</p>

                <button
                    onClick={() => setQuizStage(QUIZ_STAGES.START)}
                >
                    Back to Subjects
                </button>
            </div>
        );
    }

    // Get the current question in the original array order
    const questionData = questions[currentQuestion];

    const onNextClick = () => {
        if (!selectedOption) return;

        // Update score or record the wrong answer
        if (selectedOption === questionData.correctOption) {
            setScore((previousScore) => previousScore + 1);
        } else {
            setWrongAnswers((previousAnswers) => [
                ...previousAnswers,
                {
                    question: questionData.question,
                    selected: selectedOption,
                    correct: questionData.correctOption,
                },
            ]);
        }

        // Finish the quiz after the last question
        if (currentQuestion === questions.length - 1) {
            setQuizStage(QUIZ_STAGES.ENDED);
            return;
        }

        // Move to the next question in the original order
        setCurrentQuestion((previousQuestion) => previousQuestion + 1);
        setSelectedOption(null);
    };

    return (
        <div className="quiz-wrapper">
            <div className="header">
                <p>
                    Question {currentQuestion + 1} of {questions.length}
                </p>
            </div>

            <div className="quiz">
                <p className="question">
                    {questionData.question}
                </p>

                {questionData.options.map((option, index) => (
                    <Option
                        key={`${currentQuestion}-${index}`}
                        data={option}
                        correctOption={questionData.correctOption}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                ))}
            </div>

            <button
                id="next"
                onClick={onNextClick}
                disabled={!selectedOption}
            >
                {currentQuestion === questions.length - 1
                    ? 'Finish Quiz'
                    : 'Next'}
            </button>
        </div>
    );
};

export default Quiz;





























// import React, { useState, useEffect } from 'react';
// import Option from './Option';
// import { QUIZ_STAGES } from '../constants/constant';

// // Fisher-Yates shuffle function
// const shuffleArray = (array) => {
// 	const shuffled = [...array];

// 	for (let i = shuffled.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));

// 		[shuffled[i], shuffled[j]] = [
// 			shuffled[j],
// 			shuffled[i],
// 		];
// 	}

// 	return shuffled;
// };

// const Quiz = ({
// 	questions,
// 	score,
// 	setScore,
// 	setQuizStage,
// 	wrongAnswers,
// 	setWrongAnswers,
// }) => {
// 	const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [selectedOption, setSelectedOption] = useState(null);
// 	const [shuffledQuestions, setShuffledQuestions] = useState([]);

// 	// Shuffle questions when the selected question bank changes
// 	useEffect(() => {
// 		setShuffledQuestions(shuffleArray(questions || []));
// 		setCurrentQuestion(0);
// 		setSelectedOption(null);
// 	}, [questions]);

// 	if (!shuffledQuestions.length) {
// 		return (
// 			<div className="quiz-wrapper">
// 				<p>No questions available for this subject.</p>
// 				<button
// 					onClick={() => setQuizStage(QUIZ_STAGES.START)}
// 				>
// 					Back to Subjects
// 				</button>
// 			</div>
// 		);
// 	}

// 	const questionData = shuffledQuestions[currentQuestion];

// 	const onNextClick = () => {
// 		if (!selectedOption) return;

// 		if (selectedOption === questionData.correctOption) {
// 			setScore((previousScore) => previousScore + 1);
// 		} else {
// 			setWrongAnswers((previousAnswers) => [
// 				...previousAnswers,
// 				{
// 					question: questionData.question,
// 					selected: selectedOption,
// 					correct: questionData.correctOption,
// 				},
// 			]);
// 		}

// 		if (currentQuestion === shuffledQuestions.length - 1) {
// 			setQuizStage(QUIZ_STAGES.ENDED);
// 			return;
// 		}

// 		setCurrentQuestion((previousQuestion) => previousQuestion + 1);
// 		setSelectedOption(null);
// 	};

// 	return (
// 		<div className="quiz-wrapper">
// 			<div className="header">
// 				<p>
// 					Question {currentQuestion + 1} of{' '}
// 					{shuffledQuestions.length}
// 				</p>
// 			</div>

// 			<div className="quiz">
// 				<p className="question">
// 					{questionData.question}
// 				</p>

// 				{questionData.options.map((option) => (
// 					<Option
// 						key={option}
// 						data={option}
// 						correctOption={questionData.correctOption}
// 						selectedOption={selectedOption}
// 						setSelectedOption={setSelectedOption}
// 					/>
// 				))}
// 			</div>

// 			<button
// 				id="next"
// 				onClick={onNextClick}
// 				disabled={!selectedOption}
// 			>
// 				{currentQuestion === shuffledQuestions.length - 1
// 					? 'Finish Quiz'
// 					: 'Next'}
// 			</button>
// 		</div>
// 	);
// };

// export default Quiz;