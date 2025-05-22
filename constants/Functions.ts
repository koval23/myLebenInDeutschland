import { questionsDE, questionsRU, questionsStateDE, questionsStateRU } from '@/constants/Question';
import { QuestionDE, QuestionRU, QuestionsMap } from '@/constants/Types';

export const goToNextQuestion = (setQuestionNumber: React.Dispatch<React.SetStateAction<number>>,
  setShowTranslation: React.Dispatch<React.SetStateAction<boolean>>) => {
  setShowTranslation(false);
  setQuestionNumber((prev) => Math.min(prev + 1, 300));
};

export const goToPreviousQuestion = (setQuestionNumber: React.Dispatch<React.SetStateAction<number>>,
  setShowTranslation: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setShowTranslation(false);
  setQuestionNumber((prev) => Math.max(prev - 1, 1));
};

export const goToNextQuestionState = (setQuestionNumber: React.Dispatch<React.SetStateAction<number>>,
  setShowTranslation: React.Dispatch<React.SetStateAction<boolean>>) => {
  setShowTranslation(false);
  setQuestionNumber((prev) => Math.min(prev + 1, 10));
};

export const goToNextQuestionTest = (setQuestionNumber: React.Dispatch<React.SetStateAction<number>>) => {
  setQuestionNumber((prev) => Math.min(prev + 1, 33));
};

export const compareAndCount = (a: string, b: string, count: number): number => {
  if (a === b) {
    return count + 1;
  }
  return count;
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

export function getFrageByNumberRU(number: number): QuestionDE {
  const index = number - 1;

  if (index < 0 || index >= questionsRU.length) {
    return {
      question_number: 300,
      question: "Ты прошёл всё и ты?",
      options: ["молодец", "молодец", "молодец", "молодец"],
      answer: "молодец",
    };
  }

  return questionsRU[index];
}

export function getFrageByStateDE(state: string, number: number): QuestionDE {
  const index = number - 1;

  const allStates: QuestionsMap = questionsStateDE;

  const stateQuestions = allStates[state];

  if (!stateQuestions || index < 0 || index >= stateQuestions.length) {
    return {
      question_number: 11,
      question: "Ты прошёл всё и ты?",
      options: ["молодец", "молодец", "молодец", "молодец"],
      answer: "молодец",
    };
  }

  return stateQuestions[index];
}

export function getFrageByStateRU(state: string, number: number): QuestionDE {
  const index = number - 1;

  const allStates: QuestionsMap = questionsStateRU;

  const stateQuestions = allStates[state];

  if (!stateQuestions || index < 0 || index >= stateQuestions.length) {
    return {
      question_number: 11,
      question: "Ты прошёл всё и ты?",
      options: ["молодец", "молодец", "молодец", "молодец"],
      answer: "молодец",
    };
  }

  return stateQuestions[index];
}

export function getRandomIndexes(length: number, count: number): number[] {
    // 1. Создаём массив от 0 до length - 1
    const indexes = Array.from({ length }, (_, i) => i);
    
    // 2. Перемешиваем массив с помощью алгоритма Fisher–Yates (надёжный способ)
    for (let i = indexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [indexes[i], indexes[j]] = [indexes[j], indexes[i]]; // меняем местами элементы
    }

    // 3. Возвращаем первые count элементов из перемешанного массива
    return indexes.slice(0, count);
}
