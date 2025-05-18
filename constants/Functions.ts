import { questionsDE, questionsRU} from '@/constants/Question';
import { QuestionDE, QuestionRU} from '@/constants/Types';

export const goToNextQuestion = (setQuestionNumber: React.Dispatch<React.SetStateAction<number>>,
    setShowTranslation:React.Dispatch<React.SetStateAction<boolean>>) => {
        setShowTranslation(false);
  setQuestionNumber((prev) => Math.min(prev + 1, 300));
};

export const goToPreviousQuestion = (setQuestionNumber: React.Dispatch<React.SetStateAction<number>>,
    setShowTranslation:React.Dispatch<React.SetStateAction<boolean>>
) => {
    setShowTranslation(false);
  setQuestionNumber((prev) => Math.max(prev - 1, 1));
};

export function getFrageByNumberDE(number: number): QuestionDE {
  const index = number - 1;

  if (index < 0 || index >= questionsDE.length) {
    return {
      question_number: 300,
      question: "Ты прошёл всё и ты?",
      options: ["молодец", "молодец", "молодец", "молодец"],
      answer: "молодец"
    };
  }

  return questionsDE[index];
}

export function getFrageByNumberRU(number: number): QuestionRU {
  const index = number - 1;

  if (index < 0 || index >= questionsRU.length) {
    return {
      question_number: 300,
      question: "Ты прошёл всё и ты?",
      options: ["молодец", "молодец", "молодец", "молодец"],
      answer: "молодец",
      keywords: [
       "супер","клас"
      ]
    };
  }

  return questionsRU[index];
}