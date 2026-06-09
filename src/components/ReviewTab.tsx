import React, { useState } from 'react';
import { Question } from '../types';
import { Eye, EyeOff, ShieldCheck, KeyRound, Lock, Server, ShieldAlert, Search } from 'lucide-react';

interface ReviewTabProps {
  questions: Question[];
}

export default function ReviewTab({ questions }: ReviewTabProps) {
  const [revealedAnswers, setRevealedAnswers] = useState<{ [qId: string]: boolean }>({});
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: string }>({});
  const [searchTerm, setSearchString] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleReveal = (qId: string) => {
    setRevealedAnswers(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleSelect = (qId: string, letter: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [qId]: letter
    }));
    // Auto-reveal answers and details when an option is selected
    setRevealedAnswers(prev => ({
      ...prev,
      [qId]: true
    }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cryptography':
        return <KeyRound id="crypt_ic" className="w-3.5 h-3.5 text-indigo-600" />;
      case 'Network Security':
        return <ShieldAlert id="net_ic" className="w-3.5 h-3.5 text-indigo-600" />;
      case 'Application Security':
        return <Lock id="app_ic" className="w-3.5 h-3.5 text-indigo-600" />;
      case 'System & OS Security':
        return <Server id="sys_ic" className="w-3.5 h-3.5 text-indigo-600" />;
      case 'Access Control & Authentication':
        return <ShieldCheck id="auth_ic" className="w-3.5 h-3.5 text-indigo-600" />;
      default:
        return <ShieldCheck id="def_ic" className="w-3.5 h-3.5 text-indigo-600" />;
    }
  };

  const categories = ['All', 'Cryptography', 'Network Security', 'Application Security', 'System & OS Security', 'Access Control & Authentication'];

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (q.explanation?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
                          q.options.some(opt => opt.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="review_container" className="space-y-6">
      {/* FILTER CONTROLS */}
      <div id="filter_controls" className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-4">
        <div id="filter_header_row" className="flex items-center justify-between">
          <h3 id="filter_title" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Search & Filter Questions</h3>
          <span className="text-xxs font-mono bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full font-bold">
            {filteredQuestions.length} Match{filteredQuestions.length !== 1 ? 'es' : ''}
          </span>
        </div>
        
        <div id="input_grid" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div id="search_wrapper" className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
            <input
              id="search_input"
              type="text"
              placeholder="Search keyword (e.g. hash, MAC, packet)..."
              value={searchTerm}
              onChange={(e) => setSearchString(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-800 transition-all font-medium"
            />
          </div>
          <div id="cat_wrapper">
            <select
              id="category_filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-800 transition-all font-semibold cursor-pointer"
            >
              {categories.map((cat, idx) => (
                <option id={`cat_opt_${idx}`} key={cat} value={cat}>{cat === 'All' ? 'Filter by Security Division' : cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* QUESTIONS LIST */}
      <div id="questions_list" className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div id="no_q_fallback" className="bg-white border border-slate-200/80 rounded-2xl p-12 text-center shadow-sm">
            <p id="no_q_text" className="text-xs text-slate-500 font-medium">No board questions found matching your filter criteria.</p>
          </div>
        ) : (
          filteredQuestions.map((q, qIdx) => {
            const isRevealed = revealedAnswers[q.id] || false;
            return (
              <div
                id={`q_card_${q.id}`}
                key={q.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 space-y-4"
              >
                <div id={`q_header_${q.id}`} className="flex flex-wrap items-center justify-between gap-2">
                  <div id={`q_meta_${q.id}`} className="flex items-center gap-2">
                    <span id={`q_num_${q.id}`} className="text-[10px] bg-slate-100 text-slate-800 font-mono font-bold px-2.5 py-1 rounded">
                      QUESTION {String(qIdx + 1).padStart(2, '0')}
                    </span>
                    <div id={`q_spec_${q.id}`} className="flex items-center gap-1.5 bg-indigo-50/50 border border-indigo-100/30 px-2.5 py-0.5 rounded-full text-[10px] text-indigo-700 font-bold">
                      {getCategoryIcon(q.category)}
                      <span>{q.category}</span>
                    </div>
                  </div>
                  <span id={`q_source_${q.id}`} className="text-[9px] font-mono text-slate-400 font-semibold bg-slate-50/80 px-2 py-0.5 rounded border border-slate-100">
                    {q.source || 'General Assessment'}
                  </span>
                </div>

                <p id={`q_text_${q.id}`} className="text-slate-900 font-bold text-[14px] leading-relaxed">
                  {q.text}
                </p>

                {/* OPTIONS GRID */}
                <div id={`options_grid_${q.id}`} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                  {q.options.map((opt, optIdx) => {
                    const letter = String.fromCharCode(65 + optIdx);
                    const isCorrect = letter === q.correctAnswer;
                    const isSelected = selectedAnswers[q.id] === letter;
                    const choiceHasBeenMade = !!selectedAnswers[q.id];

                    let optionStyle = 'bg-slate-50/40 border-slate-200/60 text-slate-700 hover:bg-indigo-50/40 hover:border-indigo-300 hover:text-indigo-950 cursor-pointer';
                    let badgeStyle = 'text-slate-400';

                    if (isRevealed || choiceHasBeenMade) {
                      if (isCorrect) {
                        optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-sm shadow-emerald-50';
                        badgeStyle = 'text-emerald-700';
                      } else if (isSelected) {
                        optionStyle = 'bg-rose-50 border-rose-300 text-rose-950 font-medium shadow-sm ';
                        badgeStyle = 'text-rose-700';
                      } else {
                        optionStyle = 'bg-slate-50/20 border-slate-100 text-slate-400 opacity-60';
                        badgeStyle = 'text-slate-300';
                      }
                    }

                    return (
                      <button
                        id={`opt_${q.id}_${letter}`}
                        key={letter}
                        onClick={() => handleSelect(q.id, letter)}
                        disabled={isRevealed || choiceHasBeenMade}
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

                {/* REVEAL BUTTON & EXPLANATION */}
                <div id={`q_reveal_section_${q.id}`} className="pt-3 border-t border-slate-100 flex flex-col gap-3">
                  <div className="flex">
                    <button
                      id={`btn_reveal_${q.id}`}
                      onClick={() => toggleReveal(q.id)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 hover:bg-indigo-50 hover:text-indigo-700 text-[10px] font-bold text-slate-600 rounded-lg transition-all cursor-pointer"
                    >
                      {isRevealed ? <EyeOff id={`eye_off_${q.id}`} className="w-3.5 h-3.5" /> : <Eye id={`eye_${q.id}`} className="w-3.5 h-3.5" />}
                      <span>{isRevealed ? 'HIDE THE EXPLANATION' : 'REVEAL CORRECT ANSWER'}</span>
                    </button>
                  </div>

                  {isRevealed && (
                    <div id={`reveal_answer_panel_${q.id}`} className="bg-emerald-50/40 border border-emerald-200/50 rounded-xl p-4 space-y-2 text-xs">
                      <p id={`correct_badge_${q.id}`} className="font-bold text-emerald-900 flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span>Correct Option Key: {q.correctAnswer}</span>
                      </p>
                      {q.explanation && (
                        <p id={`explanation_${q.id}`} className="text-slate-600 leading-relaxed pl-3 border-l-2 border-emerald-400">
                          <strong className="text-slate-800">Rationale: </strong>{q.explanation}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
