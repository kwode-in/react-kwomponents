import { PropsWithChildren } from "react";

type TableHead = {
  className?: string;
};

function TableHead(props: PropsWithChildren<TableHead>) {
  return (
    <thead className={props.className}>
      <tr>{props.children}</tr>
    </thead>
  );
}
export default TableHead;
