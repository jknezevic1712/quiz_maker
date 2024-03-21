import * as z from "zod";

const quizSchema = z.object({
  question: z
    .string({ required_error: "Please fill out the question" })
    .min(1, "Question can't be empty"),
  answer: z
    .string({ required_error: "Please fill out the answer" })
    .min(1, "Answer can't be empty"),
});

export const QuizFormSchema = z.object({
  name: z
    .string({
      required_error: "Please enter quiz name",
    })
    .min(1, "Name can't be empty"),
  questions: quizSchema.array(),
});
