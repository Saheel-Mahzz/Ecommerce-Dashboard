import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IColumn } from "./types/columns";

interface IList<T> {
  columns: IColumn<T>[];
  rows: T[];
  startIndex?: number;
}

function getNestedValue<T>(
  obj: T,
  path: string,
): string | boolean | null | undefined {
  const result = path
    ?.split(".")
    .reduce<Record<string, unknown> | unknown>((acc, curr) => {
      if (acc && typeof acc === "object" && curr in acc) {
        return (acc as Record<string, unknown>)[curr];
      }
      return undefined;
    }, obj);

  return result as string | boolean | null | undefined;
}

export function List<T extends object>({
  columns,
  rows,
  startIndex,
}: IList<T>) {
  if (rows.length === 0)
    return (
      <div className="flex items-center justify-center text-3xl mt-7">
        No Products yet...
      </div>
    );
  return (
    <>
      <div className="hidden md:block rounded-2xl border bg-white shadow-sm overflow-hidden my-7 ">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              {columns.map((col, index) => (
                <TableHead
                  key={index}
                  className=" h-12 font-semibold text-slate-700 uppercase text-xs tracking-wide"
                >
                  {col?.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="transition-colors hover:bg-green-50/50 border-b"
              >
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    className="
                py-4
                text-sm
                text-slate-700
              "
                  >
                    {col?.cell
                      ? col.cell?.(row, rowIndex + (startIndex ?? 0))
                      : getNestedValue(row, col?.accessorKey as string)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="block md:hidden space-y-4 my-7">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="rounded-xl border bg-white p-4 shadow-sm space-y-3"
          >
            {columns.map((col, colIndex) => (
              <div
                key={colIndex}
                className="flex justify-between items-center text-sm border-b last:border-none pb-2 last:pb-0"
              >
                <span className="font-semibold text-slate-500 uppercase text-xs">
                  {col?.header}
                </span>

                <span className="text-slate-700 text-right">
                  {col?.cell
                    ? col.cell?.(row, rowIndex + (startIndex ?? 0))
                    : getNestedValue(row, col?.accessorKey as string)}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
