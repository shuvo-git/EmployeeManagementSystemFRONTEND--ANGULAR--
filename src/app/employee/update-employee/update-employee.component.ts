import { Component, OnInit } from '@angular/core';
import { Employee} from 'src/app/model/employee.model';
import { ApiResponse } from 'src/app/model/api.response';
import { EmployeeService } from 'src/app/service/employee.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

	id:number;
	employee:Employee;
	apiResponse:ApiResponse;
	
  constructor(private router:Router,private employeeService:EmployeeService,private route:ActivatedRoute) 
  {

  }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      data=>{
        console.log(data),
        this.employee= data
      },
      error=>console.error()
    );
  }

  onSubmit()
  {
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(
      data=>console.log(data),
      error=>console.error()
    );

    this.employee = new Employee();
    this.router.navigate(['/employees'])
  }

}
