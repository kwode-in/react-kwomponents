import { PropsWithChildren, useContext } from "react";
import { DataContext } from "./table-root.component";

type TableButtonRightProps = {
  className?: string;
};

function TableButtonRight(props: PropsWithChildren<TableButtonRightProps>) {
  let { context, setContext } = useContext(DataContext);

  function right() {
    setContext({
      ...context,
      currentPage:
        context.currentPage >=
        Math.ceil(context.totalItems / context.itemsPerPage)
          ? context.currentPage
          : context.currentPage + 1,
    });
  }
  return (
    <button className={props.className} onClick={right}>
      {props.children}
    </button>
  );
}

export default TableButtonRight;
