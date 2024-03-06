import { PropsWithChildren } from "react";

type TableButtonPrevProps = {
  className?: string;
};

function TableButtonPrev(props: PropsWithChildren<TableButtonPrevProps>) {
  return <div className={props.className}>{props.children}</div>;
}

export default TableButtonPrev;