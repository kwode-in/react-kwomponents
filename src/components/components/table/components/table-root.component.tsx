import { PropsWithChildren, createContext, useEffect, useState } from "react";

type TableProps<T> = {
  className?: string;
  totalItems?: number;
  itemsPerPage?: number;
  getCurrentPage: Function;
};

export type TableContext = {
  totalItems?: number;
  itemsPerPage?: number;
  currentPage?: number;
};

export const DataContext = createContext<any>({});

export function TableRoot<T>(props: PropsWithChildren<TableProps<T>>) {
  const [context, setContext] = useState<TableContext>({
    totalItems: props.totalItems,
    itemsPerPage: props.itemsPerPage,
    currentPage: 0,
  });

  useEffect(() => {
    setContext({
      ...context,
      totalItems: props.totalItems,
      currentPage: props.totalItems && props.totalItems > 0 ? 1 : 0,
    });
  }, [props.totalItems]);

  useEffect(() => {
    setContext({
      ...context,
      itemsPerPage: props.itemsPerPage,
    });
  }, [props.itemsPerPage]);

  useEffect(() => {
    props.getCurrentPage(context.currentPage);
  });

  const value = { context, setContext };
  return (
    <div className={props.className}>
      <DataContext.Provider value={value}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
}
