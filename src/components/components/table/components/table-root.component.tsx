import { PropsWithChildren, createContext, useEffect, useState } from "react";

type TableProps<T> = {
  className?: string;
  totalItems?: number;
  itemsPerPage?: number;
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
    currentPage: 1,
  });

  useEffect(() => {
    setContext({
      ...context,
      totalItems: props.totalItems,
      itemsPerPage: props.itemsPerPage,
    });
  }, [props]);

  const value = { context, setContext };
  return (
    <div className={props.className}>
      <DataContext.Provider value={value}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
}
