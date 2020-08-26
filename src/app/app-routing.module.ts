import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeesListComponent} from 'src/app/employee/employees-list/employees-list.component';
import { UpdateEmployeeComponent} from 'src/app/employee/update-employee/update-employee.component';

const routes:Routes = [
  {path:'',redirectTo:'/employees',pathMatch:'full'},
  {path:'add',component:CreateEmployeeComponent},
  {path:'employees',component:EmployeesListComponent},
  {path:'update/:id',component:UpdateEmployeeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
