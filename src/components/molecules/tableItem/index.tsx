"use client";

import { useState } from "react";
// components
import { CirclePlay, CircleX } from "lucide-react";
import { Button } from "~/components/atoms/button";
import Link from "next/link";
import FormPopup from "~/components/organisms/formPopup";
// types
import { Quiz } from "~/lib/types/api";
// store
import { useQuizMakerStore } from "~/lib/store/provider";

type TableItemProps = {
  item: Quiz;
};
export default function TableItem(props: TableItemProps) {
  const { item } = props;
  const editQuiz = useQuizMakerStore((s) => s.editQuiz);
  const deleteQuiz = useQuizMakerStore((s) => s.deleteQuiz);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleDeletingQuiz(quizID: string) {
    const confirmDialogResult = confirm(
      "Are you sure you want to delete the quiz?",
    );

    if (!confirmDialogResult) return;
    deleteQuiz(quizID);
  }

  return (
    <>
      <div
        className="my-2 flex flex-col items-center justify-between gap-4 rounded-sm border-transparent bg-zinc-100 p-6 shadow-md transition-all hover:shadow-xl md:flex-row md:gap-0"
        onClick={() => setIsPopupOpen(true)}
      >
        <p className="font-bold leading-normal">{item.name}</p>

        <div
          className="z-50 flex items-center gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            title="Delete quiz"
            className="px-3 py-1.5 text-zinc-950 transition-all hover:scale-110"
            variant="ghost"
            onClick={() => handleDeletingQuiz(item.id)}
          >
            <CircleX />
          </Button>
          <Button
            title="Solve quiz"
            className="px-3 py-1.5 text-zinc-950 transition-all hover:scale-110"
            variant="ghost"
          >
            <Link href={`quiz/${item.id}`}>
              <CirclePlay />
            </Link>
          </Button>
        </div>
      </div>
      {isPopupOpen && (
        <FormPopup
          saveFn={editQuiz}
          isPopupOpen={isPopupOpen}
          closePopup={() => setIsPopupOpen(false)}
          quiz={item}
        />
      )}
    </>
  );
}
