import { PropsWithChildren } from "react";

type TablePaginationMenuProps = {
  className?: string;
};

function TablePaginationMenu(
  props: PropsWithChildren<TablePaginationMenuProps>
) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

export default TablePaginationMenu;
