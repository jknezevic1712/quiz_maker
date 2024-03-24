"use client";

import { useState } from "react";
// components
import { CirclePlay, CircleX } from "lucide-react";
import { Button } from "~/components/atoms/button";
import EditQuizPopup from "~/components/organisms/editQuizPopup";
import Link from "next/link";
// types
import { Quiz } from "~/lib/types/api";

type TableItemProps = {
  item: Quiz;
  editQuiz: (quiz: Quiz) => void;
  deleteQuiz: (quizID: string) => void;
};
export default function TableItem(props: TableItemProps) {
  const { item, editQuiz, deleteQuiz } = props;

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  return (
    <>
      <div
        className="my-2 flex items-center justify-between rounded-sm border-transparent bg-zinc-100 p-6 shadow-md transition-all hover:shadow-xl"
        onClick={() => setIsEditPopupOpen(true)}
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
            onClick={() => deleteQuiz(item.id)}
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
      {isEditPopupOpen && (
        <EditQuizPopup
          item={item}
          isPopupOpen={isEditPopupOpen}
          closePopup={() => setIsEditPopupOpen(false)}
          saveFn={editQuiz}
        />
      )}
    </>
  );
}
