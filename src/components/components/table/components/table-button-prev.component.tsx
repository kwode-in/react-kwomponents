import { PropsWithChildren, useContext } from "react";
import { DataContext } from "./table-root.component";

type TableButtonPrevProps = {
  className?: string;
};

function TableButtonPrev(props: PropsWithChildren<TableButtonPrevProps>) {
  let { context, setContext } = useContext(DataContext);

  function prev() {
    setContext({
      ...context,
      currentPage: 1,
    });
  }
  return (
    <button className={props.className} onClick={prev}>
      {props.children}
    </button>
  );
}

export default TableButtonPrev;
