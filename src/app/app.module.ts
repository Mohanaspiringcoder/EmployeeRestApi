import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Router,RouterModule,Routes } from '@angular/router';
import { AddEmployeeDetailsComponent } from './components/add-employee-details/add-employee-details.component';
import { AddDepartmentDetailsComponent } from './components/add-department-details/add-department-details.component';
import { FormsModule } from '@angular/forms';
const route : Routes = [
{path : '',component : HomePageComponent}, 
{path :'employees',component : EmployeeComponent},
{path : 'departments',component : DepartmentComponent},
{path : 'addEmployeeDetails',component :AddEmployeeDetailsComponent},
{path : 'addDepartmentDetails',component : AddDepartmentDetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    HomePageComponent,
    AddEmployeeDetailsComponent,
    AddDepartmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
