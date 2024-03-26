import { create } from "zustand";
// utils
import { mockQuizQuestions, mockQuizzes } from "../assets/mockData";
// types
import { Question, Quiz } from "../types/api";
import { persist } from "zustand/middleware";

export type QuizMakerState = {
  quizzes: Quiz[];
  quizQuestions: Question[];
};

export type StoreActions = {
  addNewQuiz: (quiz: Quiz) => void;
  editQuiz: (quiz: Quiz) => void;
  deleteQuiz: (quizID: string) => void;

  addQuizQuestion: (question: Question) => void;
};

export type QuizMakerStore = QuizMakerState & StoreActions;

export const defaultInitState: QuizMakerState = {
  quizzes: mockQuizzes,
  quizQuestions: mockQuizQuestions,
};

export const createQuizMakerStore = (
  initState: QuizMakerState = defaultInitState,
) => {
  return create(
    persist<QuizMakerStore>(
      (set) => ({
        ...initState,

        addNewQuiz: (quiz) =>
          set((s) => ({
            ...s,
            quizzes: [...s.quizzes, quiz],
            quizQuestions: [...s.quizQuestions, ...quiz.questions],
          })),
        editQuiz: (quiz) =>
          set((s) => {
            const updatedQuizzes = s.quizzes.map((sQuiz) => {
              if (sQuiz.id === quiz.id) {
                return (sQuiz = quiz);
              }
              return sQuiz;
            });

            return {
              ...s,
              quizzes: updatedQuizzes,
            };
          }),
        deleteQuiz: (quizID) =>
          set((s) => {
            const updatedQuizzes = s.quizzes.filter(
              (quiz) => quiz.id !== quizID,
            );

            return {
              ...s,
              quizzes: updatedQuizzes,
            };
          }),

        addQuizQuestion: (question) =>
          set((s) => ({ ...s, quizQuestions: [...s.quizQuestions, question] })),
      }),
      {
        name: "quiz-maker-storage",
      },
    ),
  );
};
