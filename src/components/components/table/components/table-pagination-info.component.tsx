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
        {context.currentPage === 0
          ? 0
          : (context.currentPage - 1) * context.itemsPerPage + 1}
        {" - "}
        {context.currentPage === 0
          ? 0
          : context.currentPage * context.itemsPerPage}
        {" of "}
        {context.totalItems}
      </div>
    </div>
  );
}

export default TablePaginationInfo;
