export interface IApiResponse<T> {
  //succeeded: boolean;
  //message: string;
  data: T;
  status: number;
}
