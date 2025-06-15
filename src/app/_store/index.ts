import { create } from "zustand";

import { QuizWithQuestions } from "@/shared/model/quiz";

interface QuizzesState {
  quizzes: QuizWithQuestions[];
  setQuizzes: (quizzes: QuizWithQuestions[]) => void;
}
export const useStore = create<QuizzesState>((set) => ({
  quizzes: [],
  setQuizzes: (quizzes) => set({ quizzes }),
}));
