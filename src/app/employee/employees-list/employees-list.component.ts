import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {EmployeeService} from 'src/app/service/employee.service'; 
import { ApiResponse } from 'src/app/model/api.response';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees:Observable<ApiResponse> ;

  constructor(private employeeService:EmployeeService,private router:Router) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
	$(function(){
		$('#example').DataTable();
	});
    
  }
  
  deleteEmployee(id:number)
  {
	this.employeeService.deleteEmployee(id).subscribe(
		data=>{console.log(data);
		this.employees = this.employeeService.getEmployees();
		},
		error=>console.error(error)
	);
  }
  updateEmployee(id:number){
	this.router.navigate(['update',id]);
  }

}
