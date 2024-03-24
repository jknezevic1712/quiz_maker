"use client";

import { useState } from "react";
// components
import { Button } from "~/components/atoms/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
// types
import { useQuizMakerStore } from "~/lib/store/provider";

type QuizTemplateProps = { quizID: string };
export default function QuizTemplate({ quizID }: QuizTemplateProps) {
  const quiz = useQuizMakerStore(
    (s) => s.quizzes.find((q) => q.id === quizID)!,
  );
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
            <h3 className="text-xl font-bold capitalize">
              {quiz.questions[activeQuestionIdx]!.question}
            </h3>
            <p className="text-lg capitalize">
              {quiz.questions[activeQuestionIdx]!.answer}
            </p>
            <Button title="Show answer" variant="info">
              Show answer
            </Button>
          </div>
        </div>

        <Button
          title="Add question"
          type="button"
          variant="secondary"
          disabled={activeQuestionIdx === quiz.questions.length - 1}
          onClick={nextQuestion}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
