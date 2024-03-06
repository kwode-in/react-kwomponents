import TableBody from "./table-body.component";
import TableButtonLeft from "./table-button-left.component";
import TableButtonPrev from "./table-button-prev.component";
import TableButtonRight from "./table-button-right.component";
import TableButtonSkip from "./table-button-skip.component";
import TableCell from "./table-cell.component";
import TableContent from "./table-content.component";
import TableHead from "./table-head.component";
import TableHeader from "./table-header.component";
import TablePaginationInfo from "./table-pagination-info.component";
import TablePaginationMenu from "./table-pagination-menu.component";
import TablePagination from "./table-pagination.component";
import { TableRoot } from "./table-root.component";
import TableRow from "./table-row.component";
import TableTitle from "./table-title.component";

export const Table = {
  Root: TableRoot,
  Title: TableTitle,
  Content: TableContent,
  Head: TableHead,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  Pagination: TablePagination,
  PaginationInfo: TablePaginationInfo,
  PaginationMenu: TablePaginationMenu,
  LeftButton: TableButtonLeft,
  PrevButton: TableButtonPrev,
  RightButton: TableButtonRight,
  SkipButton: TableButtonSkip
};
