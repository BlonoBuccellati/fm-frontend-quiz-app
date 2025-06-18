import { QuizWithQuestionDTO } from "@/shared/api/getAllQuiz";
import { IconCorrect, IconError } from "@/shared/assets";

import { QuestionState } from "./useQuesiton";

// utility関数
function calcProgress(currentNum: number, total: number) {
  return (currentNum / total) * 100;
}
// utility関数
function getSubmitButtonLabel(questionState: QuestionState) {
  if (questionState.isLastQuestion) return "View Result";

  return questionState.submitted ? "Next Question" : "Submit Answer";
}

function getSelectedQuiz(
  quizzes: QuizWithQuestionDTO[],
  title: string,
): QuizWithQuestionDTO | undefined {
  return quizzes.find((q) => q.title === title);
}

function getOptionButtonState(
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

function makeSubmitPayload(
  state: QuestionState,
  isCorrect: boolean,
  isLastQuestion: boolean,
  progress: number,
): QuestionState {
  const isNotSelected = state.selectedOption ? false : true;
  if (!state.selectedOption) {
    return {
      ...state,
      noSelectedError: true,
    };
  }
  // 選択済みで、submit時なら、submitする。
  if (!state.submitted) {
    return {
      ...state,
      submitted: true,
      isCorrect: isCorrect,
      progress: progress,
      isLastQuestion: isLastQuestion,
    };
  }
  // 最後の問題なら
  if (isLastQuestion) {
    return {
      ...state,
      finish: isLastQuestion,
    };
  }
  // 選択済み && submit後なら
  return {
    ...state,
    noSelectedError: isNotSelected,
    currentQuestionId: state.currentQuestionId + 1,
    score: state.isCorrect ? state.score + 1 : state.score,
    // 初期化する
    submitted: false,
    isCorrect: undefined,
    selectedOption: undefined,
  };
}

function getQuestionState(
  selectedQuiz: QuizWithQuestionDTO,
  questionState: QuestionState,
) {
  const { questions } = selectedQuiz;
  const currentQuestion = questions[questionState.currentQuestionId];
  const currentQuestionOptions = currentQuestion.options;
  const totalQuestions = questions["length"];
  const currentNum = questionState.currentQuestionId + 1;
  const isLastQuestion = totalQuestions === currentNum;
  const progress = calcProgress(currentNum, totalQuestions);

  const isCorrect = currentQuestion.answer === questionState.selectedOption;
  return {
    currentQuestion,
    currentQuestionOptions,
    totalQuestions,
    currentNum,
    isLastQuestion,
    progress,
    isCorrect,
  };
}
export {
  makeSubmitPayload,
  calcProgress,
  getSubmitButtonLabel,
  getSelectedQuiz,
  getOptionButtonState,
  getQuestionState,
};
