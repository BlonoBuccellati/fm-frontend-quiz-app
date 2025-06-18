import { useState } from "react";

import { useStore } from "@/app/_store";
import { QuestionModel, QuizDTO } from "@/shared/api/getAllQuiz";

type QuestionFunction = {
  handleSubmit: () => void;
  handleOptionSelect: (option: string) => void;
};

type Quiz = Omit<QuizDTO, "id">;

type QuizResult = {
  score: number;
  totalQuestions: number;
};

type CurrentQuestion = Omit<QuestionModel, "id" | "quizId"> & {
  questionNum: number;
};

export type QuestionProps = {
  events: QuestionFunction;
  selectedQuiz: Quiz;
  quizResult: QuizResult;
  currentQuestion: CurrentQuestion;
  buttonText: string;
  hasError: boolean;
  finish: boolean;
  progress: number;
  isCorrect: undefined | boolean;
  submitted: boolean;
  selectedOption: string | undefined;
};
export function useQuestion(title: string): QuestionProps {
  const [selectedOption, setSelectedOption] = useState<undefined | string>();
  const [submitted, setSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [finish, setFinish] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [isCorrect, setIsCorrect] = useState<undefined | boolean>();

  // 正解したかず
  const [score, setScore] = useState(0);
  const { quizzes } = useStore();
  const selectedQuiz = quizzes.find((q) => q.title === title);
  if (!selectedQuiz) {
    return {};
  }
  const questions = selectedQuiz.questions;

  const totalQuestions = questions["length"];
  const currentNum = currentQuestionId + 1;
  const progressCurrent = (currentNum / totalQuestions) * 100;
  // State管理
  // 1度しかsubmitできない。
  // Answerしたら、正解のボタンにcorrectIconがつく。
  // Answerしたら、ボタンが押せなくなる。
  // Answerしたら、おしたボタンが正解か間違っているかを切り替える。
  // Answerしたら、isCorrectの数だけ状態を管理する（totalCorrect）
  // TODO:ロジックを種類によってまとめる
  const currentQuestion = questions[currentQuestionId];
  const currentQuestionOptions = currentQuestion.options;
  const isLastQuiz = questions["length"] === currentQuestionId + 1;
  const buttonText = submitted ? "Next Question" : "Submit Answer";

  const handleSubmit = () => {
    // 選択されていなければ、エラーを表示するだけ。
    if (selectedOption === undefined) {
      setHasError(true);
      return;
    }
    // 選択されていれば、ボタンを切り替える。
    if (selectedOption) {
      setSubmitted(true);
      setHasError(false); // エラーをfalseにしておく
    }
    // プログレスを更新
    setProgress(progressCurrent);
    if (isLastQuiz) {
      setFinish(true);
      return;
    }
    // 次の問題にする。
    // next questionが押されたら、ボタンの状態を戻して、次の問題にsetする。
    if (submitted) {
      setSubmitted(false);
      setCurrentQuestionId((prev) => 1 + prev);
      setSelectedOption(undefined);
      setScore((prev) => (isCorrect ? prev + 1 : prev));
    }
  };

  const handlerOptionClick = (option: string) => {
    const isCorrect = currentQuestion.answer === option;
    // クリックされたものを状態管理したい。
    setSelectedOption(option);
    setIsCorrect(isCorrect);
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
    quizResult: {
      score,
      totalQuestions, //ここ不適切かも
    },
    currentQuestion: {
      questionNum: currentQuestionId + 1,
      question: currentQuestion.question,
      options: currentQuestionOptions,
      answer: currentQuestion.answer,
    },
    buttonText,
    hasError,
    finish,
    progress,
    isCorrect,
    submitted,
    selectedOption,
  };
}
