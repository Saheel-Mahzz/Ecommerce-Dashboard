export interface IListResponse<T> {
  totalProducts: number;
  prev: number | null;
  next: number | null;
  data: T[];
}
