import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/comman/department';
import { EmployeeManagementServiceService } from 'src/app/services/employee-management-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
employeeDepartmentList : Department[];
constructor(private employeeService : EmployeeManagementServiceService,
            private route : Router){}
  

  ngOnInit(): void {
    console.log(this.getEmployeeDepartmentDetails());
  }

  getEmployeeDepartmentDetails(){
    this.employeeService.getEmployeeDepartmentDetails().subscribe(data=>{
      console.log(data);
      this.employeeDepartmentList =data;
    })
  }

  addDepartmentDetails(){
    this.route.navigateByUrl("/addDepartmentDetails")
  }
  
}

