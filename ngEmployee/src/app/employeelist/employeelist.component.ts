import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from './../employee.service';
import { Employee, IPagedList } from './../model/employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.less'],
})
export class EmployeelistComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  Employees$: Observable<
    IPagedList<Employee>
  > = this.employeeService.getEmployeeList();
  dummyEmpList: Employee[] = [
    {
      employeeId: 1,
      firstName: 'Krunal',
      lastName: 'Parmar',
      dateOfBirth: new Date(),
      phoneNumber: '+91-9833265024',
      email: 'kunal.ahmedabad@gmail.com',
    },
    {
      employeeId: 2,
      firstName: 'Kinnari',
      lastName: 'Solanki',
      dateOfBirth: new Date(),
      phoneNumber: '+91-9004558812',
      email: 'kinnari.solanki88@gmail.com',
    },
  ];
  empList: Employee[];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
  ]; // , 'name', 'weight', 'symbol'
  dataSource = this.dummyEmpList;
  ngOnInit(): void {
    this.Employees$.subscribe((empResponse: IPagedList<Employee>) => {
      this.empList = empResponse.items;
    });
    // this.employeeService.employeeList$.subscribe(
    //   (employees) => { console.log(employees); this.Employees = employees; }
    // );
    // this.employeeService.getEmployeeList().subscribe(
    //   (employees) => { console.log(employees); this.Employees = employees; }
    // );
  }
}
