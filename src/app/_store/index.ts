import { create } from "zustand";

import { QuizWithQuestionModel } from "@/shared/model/quiz";

interface QuizzesState {
  quizzes: QuizWithQuestionModel[];
  setQuizzes: (quizzes: QuizWithQuestionModel[]) => void;
}
export const useStore = create<QuizzesState>((set) => ({
  quizzes: [],
  setQuizzes: (quizzes) => set({ quizzes }),
}));
