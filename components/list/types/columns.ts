export interface IColumn<T> {
  accessorKey: string;
  header: string;
  cell: (row: T, startIndex?: number) => React.ReactNode;
}
