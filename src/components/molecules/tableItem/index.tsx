// components
import { CirclePlay, CircleX } from "lucide-react";
import { Button } from "~/components/atoms/button";
// types
import { Quiz } from "~/lib/types/api";

type TableItemProps = {
  item: Quiz;
};
export default function TableItem(props: TableItemProps) {
  const { item } = props;

  return (
    <div className="my-2 flex items-center justify-between rounded-sm border-transparent bg-zinc-100 p-6 shadow-md transition-all hover:shadow-xl">
      <p className="font-bold leading-normal">{item.name}</p>

      <div className="flex items-center gap-4">
        <Button className="px-3 py-1.5 text-zinc-950 transition-all hover:scale-110">
          <CircleX />
        </Button>
        <Button className="px-3 py-1.5 text-zinc-950 transition-all hover:scale-110">
          <CirclePlay />
        </Button>
      </div>
    </div>
  );
}
