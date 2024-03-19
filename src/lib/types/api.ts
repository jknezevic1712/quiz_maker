export type Question = {
  id: number;
  question: string;
  answer: string;
};

export type Quiz = {
  id: number;
  name: string;
  questions: Question[];
};

export type NewQuiz = Omit<Quiz, "id">;
