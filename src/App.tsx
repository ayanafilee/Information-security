import React, { useState } from 'react';
import { INFORMATION_SECURITY_QUESTIONS } from './questionsData';
import ReviewTab from './components/ReviewTab';
import QuizTab from './components/QuizTab';
import ExportPanel from './components/ExportPanel';
import { ShieldCheck, BookOpen, Award, FileText, CheckCircle, ShieldAlert, KeyRound, Lock, Server } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'study' | 'simulator'>('study');

  const questionsCount = INFORMATION_SECURITY_QUESTIONS.length;
  
  // Quick division counts
  const cryptoCount = INFORMATION_SECURITY_QUESTIONS.filter(q => q.category === 'Cryptography').length;
  const netCount = INFORMATION_SECURITY_QUESTIONS.filter(q => q.category === 'Network Security').length;
  const appCount = INFORMATION_SECURITY_QUESTIONS.filter(q => q.category === 'Application Security').length;
  const sysCount = INFORMATION_SECURITY_QUESTIONS.filter(q => q.category === 'System & OS Security').length;
  const authCount = INFORMATION_SECURITY_QUESTIONS.filter(q => q.category === 'Access Control & Authentication').length;

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
              Infosec Course Hub
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

      {/* COMPREHENSIVE OVERVIEW METRIC CHIPS bar */}
      <div id="overview_band" className="bg-white border-b border-slate-200 py-4 px-6">
        <div id="overview_container" className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div id="welcome_lead" className="space-y-0.5">
            <p id="welcome_lead_title" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Board Exam preparation</p>
            <p id="welcome_lead_subtitle" className="text-sm text-slate-600">
              Interactive review of <strong>{questionsCount} high-yield exam queries</strong>. Configure, filter, and download as printable Word format files.
            </p>
          </div>

          {/* TOPIC DIVISION MATRIXL */}
          <div id="topic_matrix" className="flex flex-wrap gap-2.5">
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-200/50">
              <KeyRound className="w-3.5 h-3.5 text-slate-500" />
              <span>Crypto ({cryptoCount})</span>
            </span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-200/50">
              <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
              <span>NetSec ({netCount})</span>
            </span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-200/50">
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>AppSec ({appCount})</span>
            </span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-200/50">
              <Server className="w-3.5 h-3.5 text-slate-500" />
              <span>Systems ({sysCount})</span>
            </span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-200/50">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>Access & Auth ({authCount})</span>
            </span>
          </div>
        </div>
      </div>

      {/* CORE WORKSPACE */}
      <main id="main_workspace" className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 flex-shrink-0">
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
                <span>Exam Simulator Mock Simulator</span>
              </button>
            </div>

            {/* TAB OUTFLOW */}
            <div id="tabs_outflow" className="pt-2">
              {activeTab === 'study' ? (
                <ReviewTab questions={INFORMATION_SECURITY_QUESTIONS} />
              ) : (
                <QuizTab questions={INFORMATION_SECURITY_QUESTIONS} />
              )}
            </div>

          </div>

          {/* SECONDARY SIDEBAR */}
          <div id="workspace_secondary" className="lg:col-span-4 space-y-6">
            <ExportPanel questions={INFORMATION_SECURITY_QUESTIONS} />
            
            {/* STUDY CHEATSHEET */}
            <div id="cheatsheet_card" className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm space-y-4">
              <h3 id="cheatsheet_title" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Board Exam Cheat Sheet</h3>
              
              <ul id="cheatsheet_list" className="space-y-4 text-xs text-slate-600">
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
                  <span><strong>MFA Requirements:</strong> Combines at least two distinct factor classes (Something you know, Something you have, Something you are).</span>
                </li>
                <li id="cheat_4" className="flex items-start gap-2.5 border-b border-slate-50 pb-3">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full shrink-0 mt-1.5" />
                  <span><strong>SQL Injection Prevention:</strong> Parameterized query binding (Prepared Statements) provides absolute defense by keeping execution space distinct.</span>
                </li>
                <li id="cheat_5" className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full shrink-0 mt-1.5" />
                  <span><strong>Symmetric vs Asymmetric:</strong> Symmetric is faster but suffers secure key-exchange problems; asymmetric utilizes key pairs (public/private).</span>
                </li>
              </ul>

              <div id="motivation_quote" className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100 text-slate-500 text-xxs leading-relaxed italic">
                "Information security is not dynamically resolved by a single firewall but by defense-in-depth engineering principles."
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* UTILITY FOOTER */}
      <footer id="footer_bar" className="bg-white border-t border-slate-200 py-6 mt-auto text-center shrink-0">
        <div id="footer_container" className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xxs font-mono">
          <p id="footer_copyright">Information Security Study Guide Hub © {new Date().getFullYear()}. Approved for offline review.</p>
          <p id="footer_status" className="bg-slate-50 border border-slate-100 px-3 py-1 rounded">Valid for Academic Course Preparation Only</p>
        </div>
      </footer>

    </div>
  );
}

