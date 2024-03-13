import { PropsWithChildren, useContext } from "react";
import { DataContext } from "./table-root.component";

type TableButtonSkipProps = {
  className?: string;
};

function TableButtonSkip(props: PropsWithChildren<TableButtonSkipProps>) {
  let { context, setContext } = useContext(DataContext);

  function skip() {
    setContext({
      ...context,
      currentPage: Math.ceil(context.totalItems / context.itemsPerPage),
    });
  }
  return (
    <button className={props.className} onClick={skip}>
      {props.children}
    </button>
  );
}

export default TableButtonSkip;
