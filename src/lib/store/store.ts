import { create } from "zustand";
// utils
import { mockQuizzes } from "../assets/mockData";
// types
import { Quiz } from "../types/api";
import { persist } from "zustand/middleware";

export type QuizMakerState = {
  quizzes: Quiz[];
};

export type StoreActions = {
  addNewQuiz: (quiz: Quiz) => void;
  editQuiz: (quiz: Quiz) => void;
  deleteQuiz: (quizID: string) => void;
};

export type QuizMakerStore = QuizMakerState & StoreActions;

export const defaultInitState: QuizMakerState = {
  quizzes: mockQuizzes,
};

export const createQuizMakerStore = (
  initState: QuizMakerState = defaultInitState,
) => {
  return create(
    persist<QuizMakerStore>(
      (set) => ({
        ...initState,
        addNewQuiz: (quiz) => set((s) => ({ quizzes: [...s.quizzes, quiz] })),
        editQuiz: (quiz) =>
          set((s) => {
            const updatedQuizzes = s.quizzes.map((sQuiz) => {
              if (sQuiz.id === quiz.id) {
                return (sQuiz = quiz);
              }
              return sQuiz;
            });

            return {
              quizzes: updatedQuizzes,
            };
          }),
        deleteQuiz: (quizID) =>
          set((s) => {
            const updatedQuizzes = s.quizzes.filter(
              (quiz) => quiz.id !== quizID,
            );

            return {
              quizzes: updatedQuizzes,
            };
          }),
      }),
      {
        name: "quiz-maker-storage",
      },
    ),
  );
};
