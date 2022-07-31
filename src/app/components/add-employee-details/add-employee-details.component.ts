import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/comman/employee';

@Component({
  selector: 'app-add-employee-details',
  templateUrl: './add-employee-details.component.html',
  styleUrls: ['./add-employee-details.component.css']
})
export class AddEmployeeDetailsComponent implements OnInit {

  constructor() { }
  employee : Employee = new Employee(0,"","",new Date,0,0);
  ngOnInit(): void {
    console.log(this.employee)
  }

  onSubmit(){
    console.log(this.employee)
  }
}
