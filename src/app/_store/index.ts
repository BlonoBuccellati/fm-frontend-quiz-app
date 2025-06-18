import { create } from "zustand";

import { QuizWithQuestionDTO } from "@/shared/api/getAllQuiz";

interface QuizzesState {
  quizzes: QuizWithQuestionDTO[];
  setQuizzes: (quizzes: QuizWithQuestionDTO[]) => void;
}
export const useStore = create<QuizzesState>((set) => ({
  quizzes: [],
  setQuizzes: (quizzes) => set({ quizzes }),
}));
