import { PropsWithChildren, useContext } from "react";
import { DataContext } from "./table-root.component";

type TableButtonLeftProps = {
  className?: string;
};

function TableButtonLeft(props: PropsWithChildren<TableButtonLeftProps>) {
  let { context, setContext } = useContext(DataContext);

  function left() {
    setContext({
      ...context,
      currentPage:
        context.currentPage <= 1
          ? context.currentPage
          : context.currentPage - 1,
    });
  }
  return (
    <button className={props.className} onClick={left}>
      {props.children}
    </button>
  );
}

export default TableButtonLeft;
