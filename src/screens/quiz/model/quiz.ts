import { QuizWithQuestionDTO } from "@/shared/api/getAllQuiz";
import { IconCorrect, IconError } from "@/shared/assets";

import { QuestionState } from "./useQuesiton";

// utility関数
export function calcProgress(currentNum: number, total: number) {
  return (currentNum / total) * 100;
}
// utility関数
export function getSubmitButtonLabel(submitted: boolean) {
  return submitted ? "Next Question" : "Submit Answer";
}

export function getSelectedQuiz(
  quizzes: QuizWithQuestionDTO[],
  title: string,
): QuizWithQuestionDTO | undefined {
  return quizzes.find((q) => q.title === title);
}

export function getOptionButtonState(
  questionState: QuestionState,
  option: string,
  answer: string,
  idx: number,
) {
  const isSelected = questionState.selectedOption === option;
  const shouldChangeColor = questionState.submitted && isSelected;
  const shouldChangeGreen = shouldChangeColor && questionState.isCorrect;
  const shouldChangeRed = shouldChangeColor && !questionState.isCorrect;

  return {
    icon: getIcon(questionState, option, answer),
    isSelected: isSelected,
    shouldChangeRed,
    shouldChangeGreen,
    optionText: numToLetter(idx),
  };
}

function getIcon(questionState: QuestionState, option: string, answer: string) {
  if (!questionState.selectedOption || !questionState.submitted) {
    return undefined;
  }
  // 答えのオプションの場合。
  if (option === answer) {
    return IconCorrect;
  }
  // 選択しているオプションの場合
  if (questionState.selectedOption === option) {
    return questionState.selectedOption === answer ? IconCorrect : IconError;
  }
  return undefined;
}

function numToLetter(n: number): string {
  if (n < 0 || n > 25) return "";
  return String.fromCharCode(65 + n);
}
