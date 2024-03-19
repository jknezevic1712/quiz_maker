import Table from "~/components/organisms/table";
// utils
import { mockQuizzes } from "~/lib/assets/mockData";

export default function QuizzesOverview() {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-8">
      <Table items={mockQuizzes} />
    </div>
  );
}
