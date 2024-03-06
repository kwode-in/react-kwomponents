import { PropsWithChildren, useContext, useEffect } from "react";
import { DataContext } from "./table-root.component";

type TablePaginationInfoProps = {
  className?: string;
};

function TablePaginationInfo(
  props: PropsWithChildren<TablePaginationInfoProps>
) {
  let { context, setContext } = useContext(DataContext);

  return (
    <div className={props.className}>
      <div>
        {Number.isInteger(context.currentPage) ? 1 * context.currentPage : 0}
        {" - "}
        {Number.isInteger(context.currentPage)
          ? context.itemsPerPage * context.currentPage
          : 0}{" "}
        of {context.totalItems}
      </div>
    </div>
  );
}

export default TablePaginationInfo;
