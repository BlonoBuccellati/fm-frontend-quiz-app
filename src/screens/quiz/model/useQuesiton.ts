import { useReducer } from "react";

import { useStore } from "@/app/_store";
import { QuestionModel, QuizDTO } from "@/shared/api/getAllQuiz";

import {
  getQuestionState as calcQuestionState,
  getSelectedQuiz,
  makeSubmitPayload,
} from "./quiz";

// State の形を定義
type QuestionState = {
  currentQuestionId: number;
  selectedOption?: string;
  submitted: boolean;
  noSelectedError: boolean;
  isCorrect?: boolean;
  finish: boolean;
  score: number;
  progress: number;
  isLastQuestion: boolean;
};
type Action =
  | { type: "optionSelect"; payload: { selectedOption: string } }
  | {
      type: "submit";
      payload: {
        isLastQuestion: boolean;
        isCorrect: boolean;
        progress: number;
      };
    };

const initialState: QuestionState = {
  currentQuestionId: 0,
  selectedOption: undefined,
  submitted: false,
  noSelectedError: false,
  isCorrect: undefined,
  finish: false,
  score: 0,
  progress: 0,
  isLastQuestion: false,
};
const reducer = (state: QuestionState, action: Action): QuestionState => {
  switch (action.type) {
    case "optionSelect":
      return {
        ...state,
        selectedOption: action.payload.selectedOption,
        noSelectedError: false,
      };
    case "submit":
      const { isCorrect, isLastQuestion, progress } = action.payload;
      return makeSubmitPayload(state, isCorrect, isLastQuestion, progress);
    default:
      return state;
  }
};

type QuestionFunction = {
  handleSubmit: () => void;
  handleOptionSelect: (option: string) => void;
};

type Quiz = Omit<QuizDTO, "id">;

type CurrentQuestion = Omit<QuestionModel, "id" | "quizId"> & {
  questionNum: number;
};

type QuestionProps = {
  events: QuestionFunction;
  questionState: QuestionState;
  selectedQuiz: Quiz;
  totalQuestions: number;
  currentQuestion: CurrentQuestion;
};
function useQuestion(title: string): QuestionProps | undefined {
  const { quizzes } = useStore();

  const [questionState, dispatch] = useReducer(reducer, initialState);

  const selectedQuiz = getSelectedQuiz(quizzes, title);
  if (!selectedQuiz) {
    return undefined;
  }

  const {
    currentQuestion,
    currentQuestionOptions,
    totalQuestions,
    currentNum,
    isLastQuestion,
    isCorrect,
    progress,
  } = calcQuestionState(selectedQuiz, questionState);

  const handleSubmit = () => {
    dispatch({
      type: "submit",
      payload: { isLastQuestion, isCorrect, progress },
    });
  };

  const handlerOptionClick = (option: string) => {
    dispatch({ type: "optionSelect", payload: { selectedOption: option } });
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
    totalQuestions,
    currentQuestion: {
      questionNum: currentNum,
      question: currentQuestion.question,
      options: currentQuestionOptions,
      answer: currentQuestion.answer,
    },
    questionState, //state
  };
}

export { type QuestionState, type QuestionProps, useQuestion };
