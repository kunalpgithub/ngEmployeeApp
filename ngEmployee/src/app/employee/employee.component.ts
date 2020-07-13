import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less'],
})
export class EmployeeComponent implements OnInit {
  employeeForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['', Validators.required],
    }),
    assets: this.fb.array([this.fb.control('')]),
  });

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.firstName.setValue("Enter your first name here...");
  }

  get assets(): FormArray {
    return this.employeeForm.get('assets') as FormArray;
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService
        .addEmployee(this.employeeForm.value)
        .subscribe((emp) => {
          console.warn('Successfully added employee.');
          alert('Employee added successfully.');
          this.router.navigate(['/EmployeeList']);
        });
      console.warn(this.employeeForm.value);
    }
  }

  addAsset(): void {
    this.assets.push(this.fb.control(''));
  }
}
