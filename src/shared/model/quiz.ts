import {
  Quiz as QuizModel,
  Prisma,
  Question as QuestionModel,
} from "@/../prisma/generated/prisma";

type QuizWithQuestionModel = Prisma.QuizGetPayload<{
  include: { questions: true };
}>;
export { type QuizWithQuestionModel };
export { type QuizModel };
export { type QuestionModel };
