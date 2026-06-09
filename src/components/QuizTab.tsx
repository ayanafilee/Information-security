import React, { useState } from 'react';
import { Question } from '../types';
import { Award, CheckCircle, XCircle, RotateCcw, ShieldCheck, KeyRound, Lock, Server, ShieldAlert } from 'lucide-react';

interface QuizTabProps {
  questions: Question[];
}

export default function QuizTab({ questions }: QuizTabProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelectOption = (qId: string, optionLetter: string) => {
    if (submitted) return; // Lock selections after submission
    setSelectedAnswers(prev => ({
      ...prev,
      [qId]: optionLetter
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const scoreCount = calculateScore();
  const rawPercentage = questions.length > 0 ? (scoreCount / questions.length) * 100 : 0;
  const gradePercentage = Math.round(rawPercentage);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cryptography':
        return <KeyRound className="w-3.5 h-3.5 text-indigo-600" />;
      case 'Network Security':
      case 'Networks & Protocols':
      case 'OSI Layers':
        return <ShieldAlert className="w-3.5 h-3.5 text-indigo-600" />;
      case 'Application Security':
      case 'Software Architecture':
      case 'OOP Concepts':
        return <Lock className="w-3.5 h-3.5 text-indigo-600" />;
      case 'System & OS Security':
      case 'Memory Management':
      case 'CPU Scheduling':
        return <Server className="w-3.5 h-3.5 text-indigo-600" />;
      case 'Access Control & Authentication':
      case 'Transactions':
      case 'Normalization':
      case 'Relational Design':
        return <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />;
      default:
        return <Award className="w-3.5 h-3.5 text-indigo-600" />;
    }
  };

  return (
    <div id="quiz_container" className="space-y-6">
      {/* PROFESSIONAL LIGHT OVERVIEW SCOREBOARD */}
      <div id="scoreboard_card" className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div id="scoreboard_info" className="space-y-2 text-center md:text-left">
          <h3 id="scoreboard_title" className="text-sm font-bold flex items-center justify-center md:justify-start gap-2 uppercase tracking-wider text-slate-800">
            <Award id="awards_ic" className="w-5 h-5 text-indigo-600" />
            <span>Interactive Exam Practice</span>
          </h3>
          <p id="scoreboard_desc" className="text-xs text-slate-400 max-w-lg leading-relaxed">
            Practice security mock questions. Answers can be updated anytime before submitting for grade validation.
          </p>
        </div>

        <div id="score_circle_panel" className="flex items-center gap-4 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100/30">
          <div id="score_circle" className="w-16 h-16 rounded-full border-4 border-indigo-100 flex items-center justify-center font-bold font-mono text-xs relative bg-white shrink-0">
            <span className={gradePercentage >= 70 ? 'text-indigo-700' : 'text-slate-500'}>
              {Object.keys(selectedAnswers).length > 0 ? `${gradePercentage}%` : '0%'}
            </span>
          </div>
          <div id="score_data">
            <p id="score_count" className="font-mono text-xs leading-none text-slate-500">
              Validated: <strong className="text-sm text-indigo-700">{scoreCount} Correct</strong> / {Object.keys(selectedAnswers).length} Attempted
            </p>
            <p className="text-[10px] text-slate-400 font-medium mt-1">
              Progress: {Object.keys(selectedAnswers).length} of {questions.length} questions
            </p>
            {submitted && (
              <p id="grade_indicator" className="text-[10px] font-bold text-indigo-700 uppercase tracking-widest mt-1.5 flex items-center gap-1">
                {gradePercentage >= 70 ? '🎖️ PASS APPROVED' : '✍️ NEEDS STUDY'}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* QUIZ LIST */}
      <div id="quiz_list" className="space-y-4">
        {questions.map((q, idx) => {
          const userAns = selectedAnswers[q.id];
          const isCorrect = userAns === q.correctAnswer;
          const displayCorrections = submitted || !!userAns;

          return (
            <div
              id={`quiz_card_${q.id}`}
              key={q.id}
              className={`bg-white rounded-2xl border p-6 transition-all duration-200 space-y-4 ${
                displayCorrections 
                  ? isCorrect 
                    ? 'border-emerald-300 shadow-emerald-50/10' 
                    : 'border-rose-300 shadow-rose-50/10'
                  : 'border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div id={`quiz_header_${q.id}`} className="flex flex-wrap items-center justify-between gap-2">
                <div id={`quiz_meta_${q.id}`} className="flex items-center gap-2">
                  <span id={`quiz_num_${q.id}`} className="text-[10px] bg-slate-100 text-slate-800 font-mono font-bold px-2.5 py-1 rounded">
                    MOCK {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div id={`quiz_spec_${q.id}`} className="flex items-center gap-1.5 bg-indigo-50/50 border border-indigo-100/30 px-2.5 py-0.5 rounded-full text-[10px] text-indigo-700 font-bold">
                    {getCategoryIcon(q.category)}
                    <span>{q.category}</span>
                  </div>
                </div>

                {displayCorrections && (
                  <span
                    id={`status_badge_${q.id}`}
                    className={`text-[9px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider ${
                      isCorrect 
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/35' 
                        : 'bg-rose-50 text-rose-800 border border-rose-200/35'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle id={`cc_ic_${q.id}`} className="w-3.5 h-3.5 text-emerald-600" />
                        <span>PASSED</span>
                      </>
                    ) : (
                      <>
                        <XCircle id={`xc_ic_${q.id}`} className="w-3.5 h-3.5 text-rose-600" />
                        <span>FAIL KEYED</span>
                      </>
                    )}
                  </span>
                )}
              </div>

              <p id={`quiz_text_${q.id}`} className="text-slate-900 font-bold text-[14px] leading-relaxed">
                {q.text}
              </p>

              {/* OPTIONS SELECTOR GRID */}
              <div id={`quiz_options_${q.id}`} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                {q.options.map((opt, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx);
                  const isSelected = userAns === letter;
                  const displayAsCorrect = displayCorrections && letter === q.correctAnswer;
                  const displayAsWrong = displayCorrections && isSelected && !isCorrect;

                  let optionStyle = 'bg-slate-50/40 border-slate-200/60 text-slate-700 hover:bg-indigo-50/50 hover:border-indigo-300 hover:text-indigo-950 cursor-pointer';
                  let badgeStyle = 'text-slate-400';

                  if (displayCorrections) {
                    if (displayAsCorrect) {
                      optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-sm shadow-emerald-50';
                      badgeStyle = 'text-emerald-700';
                    } else if (displayAsWrong) {
                      optionStyle = 'bg-rose-50 border-rose-300 text-rose-950 font-medium shadow-sm';
                      badgeStyle = 'text-rose-700';
                    } else {
                      optionStyle = 'bg-slate-50/20 border-slate-100 text-slate-300 opacity-60';
                      badgeStyle = 'text-slate-300';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-indigo-50 border-indigo-500 text-indigo-950 font-bold';
                    badgeStyle = 'text-indigo-700';
                  }

                  return (
                    <button
                      id={`quiz_opt_btn_${q.id}_${letter}`}
                      key={letter}
                      onClick={() => handleSelectOption(q.id, letter)}
                      disabled={submitted || !!userAns}
                      className={`text-left flex items-start gap-2.5 p-3 rounded-xl border text-xs transition-all focus:outline-none w-full ${optionStyle}`}
                    >
                      <span className={`font-mono font-bold shrink-0 ${badgeStyle}`}>
                        {letter}.
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* REVEAL CORRECT EXPLANATION AFTER SUBMIT */}
              {displayCorrections && (
                <div id={`quiz_explanation_panel_${q.id}`} className="bg-slate-50/65 rounded-xl p-4 space-y-1.5 text-xs">
                  <p id={`quiz_correct_badge_${q.id}`} className="font-bold text-slate-800">
                    Correct Option Rationale Key: {q.correctAnswer}
                  </p>
                  {q.explanation && (
                    <p id={`quiz_explanation_${q.id}`} className="text-slate-600 leading-relaxed pl-3 border-l-2 border-slate-300">
                      <strong>Rationale explanation: </strong>{q.explanation}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ACTION BLOCK bar */}
      <div id="action_block" className="flex items-center gap-3 pt-4">
        {!submitted ? (
          <button
            id="btn_submit_quiz"
            onClick={() => setSubmitted(true)}
            className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-100 transition-all cursor-pointer uppercase tracking-wider"
          >
            Submit Practice Mock and Show Grades
          </button>
        ) : (
          <button
            id="btn_reset_quiz"
            onClick={resetQuiz}
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 transition-all text-slate-700 text-xs font-bold rounded-xl cursor-pointer uppercase tracking-wider"
          >
            <RotateCcw className="w-4 h-4 text-slate-500" />
            <span>Reset Active Simulator</span>
          </button>
        )}
      </div>
    </div>
  );
}
