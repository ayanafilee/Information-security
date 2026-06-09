import React, { useState } from 'react';
import { 
  INFORMATION_SECURITY_QUESTIONS,
  SOFTWARE_ENGINEERING_QUESTIONS,
  OOP_PROGRAMMING_QUESTIONS,
  DATABASE_SYSTEMS_QUESTIONS,
  OPERATING_SYSTEMS_QUESTIONS
} from './questionsData';
import ReviewTab from './components/ReviewTab';
import QuizTab from './components/QuizTab';

import { 
  ShieldCheck, 
  BookOpen, 
  Award, 
  Settings, 
  Code, 
  Database, 
  Cpu, 
  CheckCircle, 
  ShieldAlert, 
  KeyRound, 
  Lock, 
  Server,
  Terminal,
  FileText
} from 'lucide-react';

const COURSES = [
  {
    id: "info_sec",
    name: "Information Security & Cryptography",
    shortName: "InfoSec & Crypto",
    description: "Cryptanalysis, TLS, firewall schemas, access policies, OSI security layers, and threat vectors.",
    questions: INFORMATION_SECURITY_QUESTIONS,
    icon: <ShieldCheck className="w-4 h-4 text-indigo-600" />
  },
  {
    id: "soft_eng",
    name: "Software Engineering & Requirements",
    shortName: "SoftEng & Metrics",
    description: "Scrum, requirements elicitations, traceability indexing, COCOMO estimation, EVM CPI, and testing levels.",
    questions: SOFTWARE_ENGINEERING_QUESTIONS,
    icon: <Settings className="w-4 h-4 text-emerald-600" />
  },
  {
    id: "oop_prog",
    name: "OOP Programming & Memory Architecture",
    shortName: "OOP & Programming",
    description: "Recursion call stacks, dangling references, copy mechanics, super classes, and sorting stability.",
    questions: OOP_PROGRAMMING_QUESTIONS,
    icon: <Code className="w-4 h-4 text-amber-600" />
  },
  {
    id: "db_systems",
    name: "Relational Database Systems & SQL Normalization",
    shortName: "Databases & SQL",
    description: "Boyce-Codd normal form (BCNF), many-to-many structures, algebra selection, indexing, and ACID locks.",
    questions: DATABASE_SYSTEMS_QUESTIONS,
    icon: <Database className="w-4 h-4 text-sky-600" />
  },
  {
    id: "os_networks",
    name: "Applied Operating Systems & Computer Networks",
    shortName: "OS & Networks",
    description: "Paging faults, circular deadlock waits, priority queue starvation, ARP, and packet network subnet masking.",
    questions: OPERATING_SYSTEMS_QUESTIONS,
    icon: <Cpu className="w-4 h-4 text-purple-600" />
  }
];

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('info_sec');
  const [activeTab, setActiveTab] = useState<'study' | 'simulator'>('study');

  const activeCourse = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];
  const activeQuestions = activeCourse.questions;
  const questionsCount = activeQuestions.length;

  // Extract categoric counts of active questions dynamically
  const categories = Array.from(new Set(activeQuestions.map(q => q.category)));
  const categoryCounts = activeQuestions.reduce((acc, q) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div id="main_app_wrapper" className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      
      {/* PROFESSIONAL MINIMALIST HEADER */}
      <header id="header_banner" className="h-20 border-b border-slate-200 bg-white flex items-center justify-between px-6 md:px-10 flex-shrink-0 sticky top-0 z-50 shadow-sm shadow-slate-100">
        <div id="header_logo_side" className="flex items-center gap-4">
          <div id="header_icon_box" className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-md shadow-indigo-100 shrink-0">
            <svg id="shield_svg" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <div id="header_text_box">
            <h1 id="app_main_title" className="text-lg font-bold tracking-tight text-slate-900 uppercase">
              Academic Course Hub
            </h1>
            <p id="app_subtitle" className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
              Exam Preparation Portal & Study Offline Resource
            </p>
          </div>
        </div>

        <div id="header_acc_side" className="hidden sm:flex items-center gap-3">
          <div id="session_indicator" className="text-right">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Current Session</p>
            <p className="text-xs font-bold text-slate-700 mt-1">Academic Year 2026</p>
          </div>
        </div>
      </header>

      {/* DYNAMIC WELCOME LEAD GREETINGS */}
      <div id="overview_band" className="bg-white border-b border-slate-200 py-5 px-6">
        <div id="overview_container" className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div id="welcome_lead" className="space-y-0.5">
            <p id="welcome_lead_title" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Course Module</p>
            <h2 id="active_course_title" className="text-md font-bold text-slate-900">{activeCourse.name}</h2>
            <p id="welcome_lead_subtitle" className="text-xs text-slate-500 leading-relaxed max-w-xl">
              {activeCourse.description} Interactive selection of <strong>{questionsCount} exam elements</strong>. Choose modes below or print as Microsoft Word.
            </p>
          </div>

          {/* DYNAMIC TOPIC DIVISION LABELS IN HEADERS */}
          <div id="topic_matrix" className="flex flex-wrap gap-2.5 max-w-xl">
            {categories.map((cat, i) => (
              <span key={cat} className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xxs font-semibold flex items-center gap-1 border border-slate-200/50">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>{cat} ({categoryCounts[cat]})</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CORE WORKSPACE */}
      <main id="main_workspace" className="flex-1 max-w-7xl w-full mx-auto px-6 py-6 flex-shrink-0">
        
        {/* COURSE SELECTION DESK BAR */}
        <section id="course_selector_wrapper" className="space-y-2.5 mb-6">
          <h3 id="panel_header_course" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Select Your academic Study Course Subject
          </h3>
          <div id="course_cards_grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {COURSES.map((course) => {
              const matches = course.id === selectedCourseId;
              return (
                <button
                  key={course.id}
                  id={`course_card_${course.id}`}
                  onClick={() => {
                    setSelectedCourseId(course.id);
                  }}
                  className={`flex flex-col text-left p-4 rounded-xl border transition-all cursor-pointer relative focus:outline-none ${
                    matches
                      ? 'bg-white border-indigo-600 text-slate-900 shadow-md shadow-indigo-50'
                      : 'bg-white/60 border-slate-200/60 text-slate-500 hover:border-slate-300 hover:text-slate-700'
                  }`}
                >
                  {matches && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-indigo-600 rounded-t-xl" />
                  )}
                  <div className="flex items-center gap-2 mb-1.5">
                    {course.icon}
                    <h4 className="font-bold text-xs truncate leading-tight">{course.shortName}</h4>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-snug line-clamp-2 font-medium">
                    {course.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        <div id="workspace_layout" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* PRIMARY CONTENT BLOCK */}
          <div id="workspace_primary" className="lg:col-span-8 space-y-6">
            
            {/* TABS SELECTOR */}
            <div id="tabs_bar" className="flex border-b border-slate-200 bg-white rounded-t-xl p-1.5 gap-2 shadow-sm border border-slate-100">
              <button
                id="btn_tab_study"
                onClick={() => setActiveTab('study')}
                className={`py-2.5 px-5 text-xs font-semibold rounded-lg flex items-center gap-2 focus:outline-none transition-all cursor-pointer ${
                  activeTab === 'study'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Interactive Study Mode</span>
              </button>
              
              <button
                id="btn_tab_simulator"
                onClick={() => setActiveTab('simulator')}
                className={`py-2.5 px-5 text-xs font-semibold rounded-lg flex items-center gap-2 focus:outline-none transition-all cursor-pointer ${
                  activeTab === 'simulator'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Exam Simulator Mock Mode</span>
              </button>
            </div>

            {/* TAB OUTFLOW WITH FULL RESET KEY TO KEEP QUIZZES CLEAN */}
            <div id="tabs_outflow" key={`${selectedCourseId}_${activeTab}`} className="pt-2">
              {activeTab === 'study' ? (
                <ReviewTab questions={activeQuestions} />
              ) : (
                <QuizTab questions={activeQuestions} />
              )}
            </div>

          </div>

          {/* SECONDARY SIDEBAR */}
          <div id="workspace_secondary" className="lg:col-span-4 space-y-6">
            
            {/* STUDY CHEATSHEET */}
            <div id="cheatsheet_card" className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm space-y-4">
              <h3 id="cheatsheet_title" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Course Cheat Sheet</h3>
              
              <ul id="cheatsheet_list" className="space-y-4 text-xs text-slate-600">
                {selectedCourseId === "info_sec" ? (
                  <>
                    <li id="cheat_1" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>Presentation Layer (Layer 6):</strong> Coordinates data formats, compression parameters, and cryptographic encryption/decryption models.</span>
                    </li>
                    <li id="cheat_2" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>Diffie-Hellman Key Agreement:</strong> Safely agrees a shared private symmetric key over insecure channels (does not perform authentication).</span>
                    </li>
                    <li id="cheat_3" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>MFA Requirements:</strong> Combines at least two distinct factors (know, have, are) sequentially.</span>
                    </li>
                  </>
                ) : selectedCourseId === "soft_eng" ? (
                  <>
                    <li id="cheat_se_1" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>Traceability Links:</strong> Maps initial business objectives to coding statements and automated test suites directly.</span>
                    </li>
                    <li id="cheat_se_2" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>COCOMO Equations:</strong> Projects schedule budgets based on Organic, Semi-Detached, or Embedded operational complexity modes.</span>
                    </li>
                    <li id="cheat_se_3" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>Earned Value Indicators:</strong> CPI values above 1.0 guarantee under-budget spending ratios.</span>
                    </li>
                  </>
                ) : selectedCourseId === "oop_prog" ? (
                  <>
                    <li id="cheat_oop_1" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>Stack Call Overheads:</strong> Heavy recursions push heap/frame pointers causing out of memory loops. Avoid depth.</span>
                    </li>
                    <li id="cheat_oop_2" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>Dangling References:</strong> Pointers referencing cleared heap addresses provoke unpredictable context errors.</span>
                    </li>
                    <li id="cheat_oop_3" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>Sort Stability Index:</strong> Preserves the comparative order of equal keys (e.g. Merge sort is stable; Heap sort is unstable).</span>
                    </li>
                  </>
                ) : selectedCourseId === "db_systems" ? (
                  <>
                    <li id="cheat_db_1" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>BCNF Form:</strong> Demands that all left hand determinants are candidate keys, wiping update anomalies.</span>
                    </li>
                    <li id="cheat_db_2" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>Dirty Reads:</strong> Caused by reading uncommitted changes that subsequently fail transaction rollbacks.</span>
                    </li>
                    <li id="cheat_db_3" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>Shared Reads:</strong> Allows parallel select readers but drops write allocations until locks clear.</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li id="cheat_os_1" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>Thrashing Solutions:</strong> Triggered when the collective active pages exceed main hardware RAM parameters.</span>
                    </li>
                    <li id="cheat_os_2" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>Deadlock Cycles:</strong> Avoid mutual exclusion, circular wait, and hold-and-wait patterns to prevent blockages.</span>
                    </li>
                    <li id="cheat_os_3" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full shrink-0 mt-1.5" />
                      <span><strong>Address Maps (ARP):</strong> Finds physical MAC layer addresses matching software level dynamic IP vectors.</span>
                    </li>
                  </>
                )}
                
                <li id="cheat_gen_ref" className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0 mt-1.5" />
                  <span><strong>Design Rule:</strong> Use Active recall. Circle the option physically or click to log study choices.</span>
                </li>
              </ul>

              <div id="motivation_quote" className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100 text-slate-500 text-xxs leading-relaxed italic">
                {selectedCourseId === "info_sec" && '"Information security is not dynamically resolved by a single firewall but by defense-in-depth engineering principles."'}
                {selectedCourseId === "soft_eng" && '"A product is not tested because it works; it works because it has been tested."'}
                {selectedCourseId === "oop_prog" && '"Code is written for humans to read, and only secondarily for machines to execute."'}
                {selectedCourseId === "db_systems" && '"In relational math, databases serve to present reality, not redundant schemas."'}
                {selectedCourseId === "os_networks" && '"An operating system is the ultimate orchestrator, turning hardware chaos into predictable process workflows."'}
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* UTILITY FOOTER */}
      <footer id="footer_bar" className="bg-white border-t border-slate-200 py-6 mt-auto text-center shrink-0">
        <div id="footer_container" className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xxs font-mono">
          <p id="footer_copyright">Academic Course Study Guide Hub © {new Date().getFullYear()}. Approved for offline review.</p>
          <p id="footer_status" className="bg-slate-50 border border-slate-100 px-3 py-1 rounded">Valid for Academic Course Preparation Only</p>
        </div>
      </footer>

    </div>
  );
}
