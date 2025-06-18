import { useReducer } from "react";

import { useStore } from "@/app/_store";
import { QuestionModel, QuizDTO } from "@/shared/api/getAllQuiz";

import { calcProgress, getSelectedQuiz, getSubmitButtonLabel } from "./quiz";

type QuestionFunction = {
  handleSubmit: () => void;
  handleOptionSelect: (option: string) => void;
};

type Quiz = Omit<QuizDTO, "id">;

type CurrentQuestion = Omit<QuestionModel, "id" | "quizId"> & {
  questionNum: number;
};

// State の形を定義
export type QuestionState = {
  currentQuestionId: number;
  selectedOption?: string;
  submitted: boolean;
  noSelectedError: boolean;
  isCorrect?: boolean;
  finish: boolean;
  score: number;
  progress: number;
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
};
const reducer = (state: QuestionState, action: Action): QuestionState => {
  // ビジネスロジック
  const isNotSelected = state.selectedOption ? false : true;
  switch (action.type) {
    case "optionSelect":
      console.log(isNotSelected);
      return {
        ...state,
        selectedOption: action.payload.selectedOption,
        noSelectedError: false,
      };
    case "submit":
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
          isCorrect: action.payload.isCorrect,
          progress: action.payload.progress,
        };
      }
      // 最後の問題なら
      if (action.payload.isLastQuestion) {
        return {
          ...state,
          finish: action.payload.isLastQuestion,
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
};
export function useQuestion(title: string): QuestionProps | undefined {
  const { quizzes } = useStore();

  const [questionState, dispatch] = useReducer(reducer, initialState);

  const selectedQuiz = getSelectedQuiz(quizzes, title);
  if (!selectedQuiz) {
    return undefined;
  }

  const { questions } = selectedQuiz;
  const currentQuestion = questions[questionState.currentQuestionId];
  const currentQuestionOptions = currentQuestion.options;

  // プログレスバー
  // Containerで行うかも。
  const totalQuestions = questions["length"];
  const currentNum = questionState.currentQuestionId + 1;
  const buttonText = getSubmitButtonLabel(questionState.submitted);
  const handleSubmit = () => {
    const totalQuestions = questions["length"];
    const currentNum = questionState.currentQuestionId + 1;
    const progress = calcProgress(currentNum, totalQuestions);
    const isLastQuestion = questions["length"] === currentNum;
    const isCorrect = currentQuestion.answer === questionState.selectedOption;
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
    totalQuestions, //ここ不適切かも
    currentQuestion: {
      questionNum: currentNum,
      question: currentQuestion.question,
      options: currentQuestionOptions,
      answer: currentQuestion.answer, //使ってなさそう。
    },
    buttonText,
    questionState, //state
  };
}
