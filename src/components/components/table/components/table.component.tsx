import { PropsWithChildren } from "react";

type TableProps = {
  className?: string;
};

function Table(props: PropsWithChildren<TableProps>) {
  return <div className={props.className}>{props.children}</div>;
}

export default Table;
