import { useReducer } from "react";

import { useStore } from "@/app/_store";
import { QuestionModel, QuizDTO } from "@/shared/api/getAllQuiz";

type QuestionFunction = {
  handleSubmit: () => void;
  handleOptionSelect: (option: string) => void;
};

type Quiz = Omit<QuizDTO, "id">;

type CurrentQuestion = Omit<QuestionModel, "id" | "quizId"> & {
  questionNum: number;
};

// State の形を定義
type QuestionState = {
  currentQuestionId: number;
  selectedOption?: string;
  submitted: boolean;
  noSelectedError: boolean;
  isCorrect?: boolean;
  finish: boolean;
  score: number;
};
type Action =
  | { type: "optionSelect"; payload: string }
  | { type: "submit" }
  | { type: "next" }
  | { type: "noSelectedError"; payload: boolean }
  | { type: "finish" }
  | { type: "correct"; payload: { isCorrect: boolean; updatedScore: number } };

const initialState: QuestionState = {
  currentQuestionId: 0,
  selectedOption: undefined,
  submitted: false,
  noSelectedError: false,
  isCorrect: undefined,
  finish: false,
  score: 0,
};
const reducer = (state: QuestionState, action: Action): QuestionState => {
  switch (action.type) {
    case "optionSelect":
      console.log(action.payload);
      return {
        ...state,
        selectedOption: action.payload,
      };
    case "submit":
      // プログレスを更新->派生値は外で計算する。
      // 派生値：最後の問題かどうかは外で計算する。
      return {
        ...state,
        submitted: true,
        noSelectedError: false,
      };
    case "correct":
      const score = action.payload.isCorrect ? state.score + 1 : state.score;
      return {
        ...state,
        isCorrect: action.payload.isCorrect,
        score: score,
      };
    // ここを他の場所でやるとロジックが複雑になるため、外で行う。
    case "noSelectedError":
      return {
        ...state,
        noSelectedError: action.payload,
      };
    case "next":
      return {
        ...state,
        currentQuestionId: state.currentQuestionId + 1,
        submitted: false,
        selectedOption: undefined,
        isCorrect: undefined,
        noSelectedError: false,
      };
    case "finish":
      return {
        ...state,
        finish: true,
      };
    default:
      return state;
  }
};
export type QuestionProps = {
  events: QuestionFunction;
  questionState: QuestionState;
  selectedQuiz: Quiz;
  totalQuestions: number;
  currentQuestion: CurrentQuestion;
  buttonText: string;
  progress: number;
};
export function useQuestion(title: string): QuestionProps | undefined {
  const { quizzes } = useStore();

  const [questionState, dispatch] = useReducer(reducer, initialState);

  const selectedQuiz = quizzes.find((q) => q.title === title);
  if (!selectedQuiz) {
    return undefined;
  }

  const questions = selectedQuiz.questions;
  const currentQuestion = questions[questionState.currentQuestionId];
  const currentQuestionOptions = currentQuestion.options;

  // プログレスバー
  const totalQuestions = questions["length"];
  const currentNum = questionState.currentQuestionId + 1;
  const progress = calcProgress(currentNum, totalQuestions);
  // Containerで行うかも。
  const buttonText = getButtonText(questionState.submitted);
  const handleSubmit = () => {
    // option が選択されているか？
    // 選択されていなければ、エラーにする。
    const isLastQuiz = questions["length"] === currentNum;
    if (isLastQuiz) {
      dispatch({ type: "finish" });
    }
    if (!questionState.selectedOption) {
      dispatch({ type: "noSelectedError", payload: true });
    }
    if (questionState.submitted) {
      dispatch({ type: "next" });
    } else {
      dispatch({ type: "submit" });
      const isCorrect = questionState.selectedOption === currentQuestion.answer;
      dispatch({
        type: "correct",
        payload: { isCorrect: isCorrect, updatedScore: questionState.score },
      });
    }
  };

  const handlerOptionClick = (option: string) => {
    dispatch({ type: "optionSelect", payload: option });
    dispatch({ type: "noSelectedError", payload: false });
  };

  return {
    events: {
      handleOptionSelect: handlerOptionClick,
      handleSubmit: handleSubmit,
    },
    selectedQuiz: {
      title: selectedQuiz.title,
      icon: selectedQuiz.icon,
      bgIconColor: selectedQuiz.bgIconColor,
    },
    totalQuestions, //ここ不適切かも
    currentQuestion: {
      questionNum: currentNum,
      question: currentQuestion.question,
      options: currentQuestionOptions,
      answer: currentQuestion.answer, //使ってなさそう。
    },
    buttonText,
    progress,
    questionState, //state
  };
}

// utility関数
function calcProgress(currentNum: number, total: number) {
  return (currentNum / total) * 100;
}
// utility関数
function getButtonText(submitted: boolean) {
  return submitted ? "Next Question" : "Submit Answer";
}
