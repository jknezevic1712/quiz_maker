"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";
// utils
import { createQuizMakerStore, type QuizMakerStore } from "./store";

export const QuizMakerStoreContext =
  createContext<StoreApi<QuizMakerStore> | null>(null);

export interface QuizMakerStoreProviderProps {
  children: ReactNode;
}

export const QuizMakerStoreProvider = ({
  children,
}: QuizMakerStoreProviderProps) => {
  const storeRef = useRef<StoreApi<QuizMakerStore>>();
  if (!storeRef.current) {
    storeRef.current = createQuizMakerStore();
  }

  return (
    <QuizMakerStoreContext.Provider value={storeRef.current}>
      {children}
    </QuizMakerStoreContext.Provider>
  );
};

export const useQuizMakerStore = <T,>(
  selector: (store: QuizMakerStore) => T,
): T => {
  const quizMakerStoreContext = useContext(QuizMakerStoreContext);

  if (!quizMakerStoreContext) {
    throw new Error(
      `useQuizMakerStore must be use within QuizMakerStoreProvider`,
    );
  }

  return useStore(quizMakerStoreContext, selector);
};
