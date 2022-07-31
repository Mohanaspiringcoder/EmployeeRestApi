import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/comman/employee';
import { EmployeeManagementServiceService } from 'src/app/services/employee-management-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeesList : Employee[];
  constructor(private employeeService : EmployeeManagementServiceService,
    private route : Router) { }

  ngOnInit(): void {
    // // console.log("Its Me Mohan")
    console.log(this.getAllEmployees());
    // this.getAllEmployees;
    // this.employeesList;
  }


  getAllEmployees(){
    this.employeeService.getAllEmployee().subscribe(data=>{
      console.log(data)
      this.employeesList =data;
    })
  }

  addEmployeeDetails(){
    this.route.navigateByUrl("/addEmployeeDetails")
  }

}
