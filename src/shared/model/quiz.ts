import { Quiz as QuizModel, Prisma } from "@/../prisma/generated/prisma";

type QuizWithQuestions = Prisma.QuizGetPayload<{
  include: { questions: true };
}>;

export { type QuizWithQuestions };
export { type QuizModel };
