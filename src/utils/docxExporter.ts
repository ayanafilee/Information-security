import { Question } from '../types';

interface ExportOptions {
  includeAnswers: boolean;
  includeExplanations: boolean;
  categories: string[];
  studentName?: string;
  idNo?: string;
}

export function exportQuestionsToWord(questions: Question[], options: ExportOptions) {
  const filtered = questions.filter(q => options.categories.includes(q.category));
  
  // Dynamically assign course subject name for the MS Word cover sheets
  let subjectName = "Selected Prep Course Curriculum";
  const firstCat = filtered[0]?.category || "";
  if (['Cryptography', 'Network Security', 'Application Security', 'System & OS Security', 'Access Control & Authentication'].includes(firstCat)) {
    subjectName = "Information Security & Cryptography";
  } else if (['Software Processes', 'Requirements Engineering', 'Software Testing', 'Software Architecture', 'Implementation & Maintenance', 'Project Management & Cost'].includes(firstCat)) {
    subjectName = "Software Engineering & Requirements";
  } else if (['OOP Concepts', 'Programming Mechanics', 'Memory Management', 'Algorithm Complexity', 'Data Structures'].includes(firstCat)) {
    subjectName = "OOP Concepts & Memory Architecture";
  } else if (['Normalization', 'Relational Design', 'Query languages', 'Transactions & Concurrency', 'Transactions'].includes(firstCat)) {
    subjectName = "Relational Database Systems & SQL Normalization";
  } else if (['Memory Management', 'Concurrency', 'CPU Scheduling', 'Networks & Protocols', 'OSI Layers'].includes(firstCat)) {
    subjectName = "Applied Operating Systems & Computer Networks";
  }

  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <title>Information Security Exam Study Guide</title>
      <!--[if gte mso 9]>
      <xml>
        <w:WordDocument>
          <w:View>Print</w:View>
          <w:Zoom>100</w:Zoom>
          <w:DoNotOptimizeForBrowser/>
        </w:WordDocument>
      </xml>
      <![endif]-->
      <style>
        @page {
          size: 8.5in 11.0in;
          margin: 1.0in 1.0in 1.0in 1.0in;
          mso-header-margin: .5in;
          mso-footer-margin: .5in;
        }
        body {
          font-family: "Calibri", "Arial", sans-serif;
          font-size: 11pt;
          line-height: 1.5;
          color: #333333;
        }
        h1 {
          font-family: "Calibri Light", "Segoe UI", sans-serif;
          font-size: 24pt;
          color: #1F4E78;
          text-align: center;
          margin-top: 50px;
          margin-bottom: 20px;
          font-weight: bold;
        }
        h2 {
          font-family: "Calibri", "Segoe UI", sans-serif;
          font-size: 16pt;
          color: #2E5B82;
          border-bottom: 1.5pt solid #1F4E78;
          padding-bottom: 3px;
          margin-top: 30px;
          margin-bottom: 15px;
          font-weight: bold;
        }
        h3 {
          font-family: "Calibri", "Segoe UI", sans-serif;
          font-size: 13pt;
          color: #2E5B82;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        p {
          margin-top: 0;
          margin-bottom: 8px;
        }
        .cover-page {
          text-align: center;
          page-break-after: always;
        }
        .sub-title {
          font-size: 14pt;
          color: #595959;
          margin-bottom: 100px;
          font-style: italic;
        }
        .meta-box {
          border: 1pt solid #D3D3D3;
          background-color: #F8F9FA;
          padding: 15px;
          margin: 100px auto auto auto;
          width: 80%;
          text-align: left;
        }
        .meta-table {
          width: 100%;
          border-collapse: collapse;
        }
        .meta-table td {
          padding: 6px;
          font-size: 10.5pt;
        }
        .question-card {
          margin-bottom: 25px;
          page-break-inside: avoid;
        }
        .question-text {
          font-weight: bold;
          color: #1F4E78;
          margin-bottom: 10px;
        }
        .option-item {
          margin-left: 20px;
          margin-bottom: 5px;
        }
        .answer-badge {
          color: #2E7D32;
          font-weight: bold;
          margin-top: 8px;
          background-color: #E8F5E9;
          padding: 4px 8px;
          display: inline-block;
          border-radius: 4px;
        }
        .explanation-text {
          font-style: italic;
          color: #555555;
          margin-top: 4px;
          margin-left: 10px;
          font-size: 10pt;
        }
        .section-break {
          page-break-after: always;
        }
        .study-note {
          background-color: #FFF3CD;
          border-left: 3.5pt solid #FFC107;
          padding: 10px;
          margin-bottom: 20px;
          font-size: 10pt;
        }
      </style>
    </head>
    <body>

      <!-- COVER PAGE -->
      <div class="cover-page">
        <p style="margin-top: 100px; font-size: 13pt; color: #1F4E78; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">Offline Study Resource</p>
        <h1>${subjectName.toUpperCase()}</h1>
        <p style="font-size: 20pt; color: #2E5B82; font-weight: 300; margin-bottom: 10px;">EXAM PREPARATION & STUDY HANDBOOK</p>
        <p class="sub-title">COMPREHENSIVE EXAM MOCK QUESTIONNAIRE</p>
        
        <div class="meta-box">
          <table class="meta-table">
            <tr>
              <td style="font-weight: bold; width: 30%;">Course Subject:</td>
              <td>${subjectName}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Exported Date:</td>
              <td>${dateStr}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Candidate Name:</td>
              <td>${options.studentName || '__________________________________'}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">ID Number:</td>
              <td>${options.idNo || '__________________________________'}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Compiled Questions:</td>
              <td>${filtered.length} high-yield exam queries</td>
            </tr>
          </table>
        </div>
        
        <p style="margin-top: 150px; font-size: 9pt; color: #888888;">Generated via academic Exam Resource Hub. Approved for offline review.</p>
      </div>

      <!-- INSTRUCTIONS SECTION -->
      <h2>EXAMINATION INSTRUCTIONS</h2>
      <div class="study-note">
        <strong>Study Tip:</strong> Use this offline sheet to practice active recall. Try explaining why candidate incorrect choices are invalid to cement secure computing criteria in memory.
      </div>
      <p>Please read each question carefully and circle the letter (A, B, C, D, or E) corresponding to the best possible selection.</p>
      <p>This exam study guide contains questions in the following selected security divisions:</p>
      <ul>
        ${options.categories.map(cat => `<li><strong>${cat}</strong></li>`).join('')}
      </ul>
      <p style="margin-bottom: 40px;">Time Allowed: <strong>3 hours (Mock Simulation)</strong></p>

      <div class="section-break"></div>

      <!-- QUESTIONS LIST -->
      <h2>EXAM QUESTIONS</h2>
      
      ${filtered.map((q, idx) => `
        <div class="question-card">
          <p class="question-text">Question ${idx + 1}. ${escapeHtml(q.text)}</p>
          <p style="font-size: 9pt; color: #777777; margin-top: -5px; margin-bottom: 8px;">Category: ${q.category} | Source: ${q.source || 'Standard Software Exit Mock'}</p>
          
          <table style="width: 100%; border: none;">
            ${q.options.map((opt, optIdx) => {
              const letter = String.fromCharCode(65 + optIdx);
              return `
                <tr>
                  <td style="width: 25px; font-weight: bold; vertical-align: top; padding: 3px 0;">[  ] ${letter}.</td>
                  <td style="vertical-align: top; padding: 3px 0;">${escapeHtml(opt)}</td>
                </tr>
              `;
            }).join('')}
          </table>

          ${options.includeAnswers ? `
            <div style="margin-top: 8px; border-left: 2pt solid #4CAF50; padding-left: 10px; margin-left: 20px;">
              <p style="color: #2E7D32; font-weight: bold; margin-bottom: 4px;">Correct Answer: ${q.correctAnswer}</p>
              ${options.includeExplanations && q.explanation ? `
                <p style="color: #555555; font-size: 9.5pt; line-height: 1.4; margin-top: 2px;"><strong>Explanation:</strong> ${escapeHtml(q.explanation)}</p>
              ` : ''}
            </div>
          ` : ''}
        </div>
      `).join('')}

      ${!options.includeAnswers ? `
        <div class="section-break"></div>
        <h2>ANSWER KEY</h2>
        <p>Use the answer grid below to grade your offline exam performance once you have completed all questions.</p>
        
        <table style="width: 80%; border-collapse: collapse; margin-top: 20px;" border="1">
          <thead>
            <tr style="background-color: #1F4E78; color: white;">
              <th style="padding: 8px; text-align: center;">Question #</th>
              <th style="padding: 8px; text-align: center;">Correct Selection</th>
              <th style="padding: 8px; text-align: left;">Topic Reference</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.map((q, idx) => `
              <tr style="background-color: ${idx % 2 === 0 ? '#F8F9FA' : '#FFFFFF'};">
                <td style="padding: 8px; text-align: center; font-weight: bold;">${idx + 1}</td>
                <td style="padding: 8px; text-align: center; font-weight: bold; color: #1F4E78;">${q.correctAnswer}</td>
                <td style="padding: 8px; text-align: left;">${q.category}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      ` : ''}

    </body>
    </html>
  `;

  // Create Blob and download
  const blob = new Blob(['\ufeff' + htmlContent], {
    type: 'application/msword;charset=utf-8'
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${subjectName.replace(/[^a-z0-9]/gi, '_')}_Exam_Prep_${new Date().toISOString().slice(0, 10)}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
