// components
import TableItem from "~/components/molecules/tableItem";

type TableProps = {
  items: any[];
};
export default function Table(props: TableProps) {
  const { items } = props;

  return (
    <div className="flex min-h-[180px] w-full flex-col rounded-sm bg-zinc-200 p-2 transition-all">
      <h2 className="w-full border-b-2 border-zinc-950 pb-2 text-xl font-bold capitalize italic">
        Quizzes Overview
      </h2>
      <div className="flex h-full flex-col justify-start">
        {items
          // .filter((task) => task.status === taskType)
          .map((item) => (
            <TableItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
