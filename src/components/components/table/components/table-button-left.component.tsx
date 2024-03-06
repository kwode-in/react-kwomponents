import { PropsWithChildren } from "react";

type TableButtonLeftProps = {
  className?: string;
};

function TableButtonLeft(props: PropsWithChildren<TableButtonLeftProps>) {
  return <div className={props.className}>{props.children}</div>;
}

export default TableButtonLeft;
