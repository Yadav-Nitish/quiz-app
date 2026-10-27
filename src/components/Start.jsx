
import React, { useState } from 'react';
import { QUIZ_STAGES } from '../constants/constant';

const Start = ({
  setQuizStage,
  setSelectedSubject,
}) => {
  const [subject, setSubject] = useState('');

  const subjects = [
    { id: 'static1', name: 'Static' },
    { id: 'award', name: 'Award' },
    { id: 'appointment', name: 'Appointment' },
    { id: 'shift', name: 'Shift' },
    { id: 'sport', name: 'Sport' },
    { id: 'militryExercise', name: 'Military Exercise' },
    { id: 'RamsarSite', name: 'Ramsar Site' },
    { id: 'days', name: 'Days' },
  ];

  const startQuiz = () => {
    if (!subject) return;

    setSelectedSubject(subject);
    setQuizStage(QUIZ_STAGES.IN_PROGRESS);
  };

  return (
    <div className="start-screen">

      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/luffy.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="video-overlay"></div>

      {/* Quiz content */}
      <div className="start-content">
        <h1>Select Your Subject</h1>

        <p>Choose one subject to start your quiz.</p>

        <div className="subjects">
          {subjects.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`subject-button ${
                subject === item.id ? 'selected' : ''
              }`}
              onClick={() => setSubject(item.id)}
              aria-pressed={subject === item.id}
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          id="start"
          onClick={startQuiz}
          disabled={!subject}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Start;
