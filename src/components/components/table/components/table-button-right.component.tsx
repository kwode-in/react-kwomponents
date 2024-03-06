import { PropsWithChildren } from "react";

type TableButtonRightProps = {
  className?: string;
};

function TableButtonRight(props: PropsWithChildren<TableButtonRightProps>) {
  return <div className={props.className}>{props.children}</div>;
}

export default TableButtonRight;