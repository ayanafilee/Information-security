import React, { useState } from 'react';
import { Question } from '../types';
import { exportQuestionsToWord } from '../utils/docxExporter';
import { Download, FileText, Check, Settings, ShieldCheck, User } from 'lucide-react';

interface ExportPanelProps {
  questions: Question[];
}

export default function ExportPanel({ questions }: ExportPanelProps) {
  const [includeAnswers, setIncludeAnswers] = useState(true);
  const [includeExplanations, setIncludeExplanations] = useState(true);
  const [studentName, setStudentName] = useState('');
  const [idNo, setIdNo] = useState('');
  
  // Dynamic topic categories
  const categories = Array.from(new Set(questions.map(q => q.category)));
  const [selectedCats, setSelectedCategories] = useState<string[]>(categories);
  const [prevQuestions, setPrevQuestions] = useState<Question[]>(questions);

  // Sync state if questions change (e.g., course switch)
  if (questions !== prevQuestions) {
    setSelectedCategories(categories);
    setPrevQuestions(questions);
  }

  const handleToggleCategory = (cat: string) => {
    if (selectedCats.includes(cat)) {
      if (selectedCats.length === 1) return; // Retain at least one
      setSelectedCategories(prev => prev.filter(c => c !== cat));
    } else {
      setSelectedCategories(prev => [...prev, cat]);
    }
  };

  const handleExport = () => {
    exportQuestionsToWord(questions, {
      includeAnswers,
      includeExplanations,
      categories: selectedCats,
      studentName,
      idNo,
    });
  };

  const exportCount = questions.filter(q => selectedCats.includes(q.category)).length;

  return (
    <div id="export_panel" className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
      <div id="export_banner" className="bg-gradient-to-br from-indigo-950 to-indigo-900 p-6 text-white space-y-2">
        <h3 id="export_banner_title" className="text-sm font-bold flex items-center gap-2 uppercase tracking-wider">
          <FileText className="w-5 h-5 text-indigo-400" />
          <span>Prepare Word Download</span>
        </h3>
        <p id="export_banner_desc" className="text-xxs text-indigo-200/90 leading-relaxed font-medium">
          Configure security question filters and pre-fill candidate sheets to generate premium, offline-ready Microsoft Word study materials.
        </p>
      </div>

      <div id="export_form" className="p-6 space-y-6">
        {/* STUDENT IDENTIFIER METADATA CARDS */}
        <div id="meta_fields" className="space-y-3">
          <h4 id="meta_header" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>Document Cover Headers (Optional)</span>
          </h4>
          <div id="meta_grid" className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div id="field_name">
              <label id="lbl_name" className="block text-[9px] font-bold text-slate-500 uppercase tracking-wide mb-1">Student Name / Candidate</label>
              <input
                id="inp_name"
                type="text"
                placeholder="e.g. John Doe"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-800 transition-all"
              />
            </div>
            <div id="field_id">
              <label id="lbl_id" className="block text-[9px] font-bold text-slate-500 uppercase tracking-wide mb-1">Register ID / Symbol No.</label>
              <input
                id="inp_id"
                type="text"
                placeholder="e.g. SE/99863/2026"
                value={idNo}
                onChange={(e) => setIdNo(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-800 transition-all"
              />
            </div>
          </div>
        </div>

        {/* TOPIC SELECTION CHECKBOXES */}
        <div id="check_modules" className="space-y-2.5">
          <h4 id="check_modules_title" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>Select Security Divisions</span>
          </h4>
          <div id="cats_grid" className="grid grid-cols-1 gap-2 bg-slate-50/50 p-3.5 rounded-xl border border-slate-200/50">
            {categories.map(cat => {
              const checked = selectedCats.includes(cat);
              return (
                <button
                  id={`cat_chk_${cat.replaceAll(' ', '_')}`}
                  key={cat}
                  onClick={() => handleToggleCategory(cat)}
                  className="flex items-center gap-3 text-left w-full hover:bg-slate-100 p-1.5 rounded-lg text-xs transition-colors focus:outline-none cursor-pointer"
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                    checked 
                      ? 'bg-indigo-600 border-indigo-600 text-white' 
                      : 'border-slate-300 text-transparent'
                  }`}>
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className={`font-semibold ${checked ? 'text-slate-900' : 'text-slate-400'}`}>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PRINT CRITERIA SETTINGS */}
        <div id="print_criteria" className="space-y-2.5">
          <h4 id="print_criteria_title" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Settings className="w-3.5 h-3.5 text-slate-300" />
            <span>Print Settings</span>
          </h4>
          <div id="settings_switches" className="space-y-3 bg-slate-50/50 p-3.5 rounded-xl border border-slate-200/50 text-xs">
            {/* Answer toggle */}
            <div id="switch_ans" className="flex items-center justify-between">
              <div id="switch_ans_lbl">
                <p id="switch_ans_ttl" className="font-bold text-slate-800">Include Correct Answer Keys</p>
                <p id="switch_ans_desc" className="text-[10px] text-slate-400">Enable to write correct keys in-line or as an Answer Sheet at the end.</p>
              </div>
              <button
                id="btn_toggle_ans"
                onClick={() => setIncludeAnswers(!includeAnswers)}
                className={`w-10 h-6 pl-0.5 rounded-full flex items-center transition-colors focus:outline-none cursor-pointer ${includeAnswers ? 'bg-indigo-600' : 'bg-slate-200'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${includeAnswers ? 'translate-x-[14px]' : 'translate-x-0'}`} />
              </button>
            </div>
            
            {/* Explanation toggle */}
            {includeAnswers && (
              <div id="switch_exp" className="flex items-center justify-between pt-3 border-t border-slate-200/50 transition-all">
                <div id="switch_exp_lbl">
                  <p id="switch_exp_ttl" className="font-bold text-slate-800">Include Explanations / Rationales</p>
                  <p id="switch_exp_desc" className="text-[10px] text-slate-400">Attaches deep explanations indicating why the selection holds true.</p>
                </div>
                <button
                  id="btn_toggle_exp"
                  onClick={() => setIncludeExplanations(!includeExplanations)}
                  className={`w-10 h-6 pl-0.5 rounded-full flex items-center transition-colors focus:outline-none cursor-pointer ${includeExplanations ? 'bg-indigo-600' : 'bg-slate-200'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${includeExplanations ? 'translate-x-[14px]' : 'translate-x-0'}`} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* PRIMARY TRIGGER */}
        <div id="trigger_block" className="pt-2">
          <button
            id="btn_trigger_download"
            onClick={handleExport}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-100 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Download MS Word Document</span>
          </button>
          <p id="trigger_meta" className="text-center text-xxs text-slate-400 mt-2 font-mono">
            {exportCount} of {questions.length} questions selected for compile
          </p>
        </div>
      </div>
    </div>
  );
}
