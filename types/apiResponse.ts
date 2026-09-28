export interface IListResponse<T> {
  count: number;
  prev: number | null;
  next: number | null;
  results: T[];
}
