export interface Question {
  id: string;
  number: number;
  text: string;
  options: string[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation?: string;
  category: string;
  source?: string;
  points?: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: { [questionId: string]: string };
  isSubmitted: boolean;
  score: number;
  showCorrections: boolean;
}
