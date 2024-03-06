import { PropsWithChildren } from "react";

type TableButtonSkipProps = {
  className?: string;
};

function TableButtonSkip(props: PropsWithChildren<TableButtonSkipProps>) {
  return <div className={props.className}>{props.children}</div>;
}

export default TableButtonSkip;
