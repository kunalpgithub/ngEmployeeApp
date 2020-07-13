export interface IPagedList<T> {
  indexFrom: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  items: Array<T>;
  hasPreviousPage: boolean;
}

export class Employee {
  public employeeId: number;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: Date;
  public phoneNumber: string;
  public email: string;
}
