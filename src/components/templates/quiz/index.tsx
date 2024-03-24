"use client";

import { useState } from "react";
// components
import { Button } from "~/components/atoms/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
// utils
import { mockQuizzes } from "~/lib/assets/mockData";
// types
import { Quiz } from "~/lib/types/api";

type QuizTemplateProps = { quizID: string };
export default function QuizTemplate({ quizID }: QuizTemplateProps) {
  const [quiz] = useState<Quiz>(mockQuizzes.find((q) => q.id === quizID)!);
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);

  function previousQuestion() {
    setActiveQuestionIdx((prev) => prev - 1);
  }

  function nextQuestion() {
    setActiveQuestionIdx((prev) => prev + 1);
  }

  return (
    <div className="flex w-full flex-col items-center justify-start p-4 shadow-2xl">
      <h2 className="mb-12 w-full text-center text-2xl font-bold capitalize italic md:text-left">
        {quiz.name}
      </h2>

      <div className="flex items-center justify-between">
        <Button
          title="Add question"
          type="button"
          variant="secondary"
          disabled={activeQuestionIdx === 0}
          onClick={previousQuestion}
        >
          <ArrowLeft />
        </Button>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-full max-w-lg text-center">
            <h3 className="text-xl font-bold capitalize">Quiz question</h3>
            <p className="text-lg capitalize">Quiz answer</p>
            <Button title="Show answer" variant="info">
              Show answer
            </Button>
          </div>
        </div>

        <Button
          title="Add question"
          type="button"
          variant="secondary"
          disabled={activeQuestionIdx === quiz.questions.length}
          onClick={nextQuestion}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
