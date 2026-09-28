export interface IActionState<T> {
  sucess: boolean;
  error: null | Record<string, null>;
  message: string | null;
  data: T | null;
}
