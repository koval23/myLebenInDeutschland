export type QuestionDE = {
  question_number: number;
  question: string;
  options: string[];
  answer: string;
  image?: string;
};

export type QuestionRU = {
  question_number: number;
  question: string;
  options: string[];
  answer: string;
  image?: string;
  keywords: string[];
};

export type QuestionState = {
  question_number: number;
  question: string;
  image?: string;
  options: string[];
  answer: string;
};

export type QuestionsMap = {
  [region: string]: QuestionState[];
};

