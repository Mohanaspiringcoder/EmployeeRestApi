import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/comman/department';

@Component({
  selector: 'app-add-department-details',
  templateUrl: './add-department-details.component.html',
  styleUrls: ['./add-department-details.component.css']
})
export class AddDepartmentDetailsComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  
  }
  departmentList : Department[]
dept : Department = new Department(0,"",0);
  onSubmit(){
    console.log(this.dept)
    this.route.navigateByUrl("/addDepartmentDetails")

  }

}
