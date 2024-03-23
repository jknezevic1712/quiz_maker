"use client";

// components
import TableItem from "~/components/molecules/tableItem";
import AddQuizPopup from "../addQuizPopup";
// types
import type { Dispatch, SetStateAction } from "react";
import { Quiz } from "~/lib/types/api";

type TableProps = {
  tableData: Quiz[];
  setTableData: Dispatch<SetStateAction<Quiz[]>>;
};
export default function Table(props: TableProps) {
  const { tableData, setTableData } = props;

  function addNewQuiz(quiz: Quiz) {
    setTableData((prev) => [...prev, quiz]);
  }

  function editQuiz(quiz: Quiz) {
    const updatedData = tableData.map((item) => {
      if (item.id === quiz.id) {
        return (item = quiz);
      }
      return item;
    });
    setTableData(updatedData);
  }

  function deleteQuiz(quizID: string) {
    const confirmDialogResult = confirm(
      "Are you sure you want to delete the quiz?",
    );

    if (!confirmDialogResult) return;
    setTableData((prev) => prev.filter((quiz) => quiz.id !== quizID));
  }

  return (
    <div className="flex min-h-[180px] w-full flex-col rounded-sm bg-zinc-200 p-8 transition-all">
      <div className="flex items-center justify-between border-b-2 border-zinc-950 pb-2">
        <h2 className="text-xl font-bold capitalize italic">
          Quizzes Overview
        </h2>
        <AddQuizPopup saveFn={addNewQuiz} />
      </div>
      <div className="flex h-full flex-col justify-start">
        {tableData.map((item) => (
          <TableItem
            key={item.id}
            item={item}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
          />
        ))}
      </div>
    </div>
  );
}
