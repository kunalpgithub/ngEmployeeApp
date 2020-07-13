import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../environments/environment';
import { Employee, IPagedList } from './model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // private employeeList = new BehaviorSubject([]);
  // employeeList$ = this.employeeList.asObservable();
  // private employeeAPI = 'https://localhost:5001/api/Employee';
  constructor(private http: HttpClient) {}

  addEmployee(employee: any): Observable<any> {
    // this.employeeList.next(this.employeeList.getValue().concat([Employee]));
    return this.http
      .post(environment.apiUrl + '/Employee', employee)
      .pipe(catchError(this.handleError));
  }

  getEmployeeList(): Observable<IPagedList<Employee>> {
    return this.http.get<IPagedList<Employee>>(environment.apiUrl + '/Employee');
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
