import { Component, OnInit } from '@angular/core';
import { LEmployees} from '../employes.interface';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees:LEmployees[];
  searchDepartment:string ='';
  searchName:string =  '';
  allEmployes:LEmployees[];
  departments1 =["Computer", "Physics", "Chemistry"];
  serchedNameData:LEmployees[]= new Array();
  serchedDeptData:LEmployees[]= new Array();


  

  constructor() { 
    this.employees = [
      {
        name: "Employee One",
        age: 40,
        email: "one@gmail.com",
        departments: ["Computer", "Physics"],
      },
      {
        name: "Employee Two",
        age: 10,
        email: "Two@gmail.com",
        departments: ["Computer"],
      },
      {
        name: "Employee Three",
        age: 10,
        email: "Three@gmail.com",
        departments: ["Physics", "Chemistry"],
      },
      {
        name: "Employee Four",
        age: 60,
        email: "Four@gmail.com",
        departments: ["Chemistry", "Physics"],
      },
      {
        name: "Employee Five",
        age: 70,
        email: "Five@gmail.com",
        departments: ["Computer", "Physics", "Chemistry"],
      },
      {
        name: "Employee Six",
        age: 70,
        email: "Six@gmail.com",
        departments: ["Computer", "Physics"],
      },
    ];
    this.allEmployes = [...this.employees];
  }

  ngOnInit(): void {
    
    
  }

  resetData(){
    this.employees = [
      {
        name: "Employee One",
        age: 40,
        email: "one@gmail.com",
        departments: ["Computer", "Physics"],
      },
      {
        name: "Employee Two",
        age: 10,
        email: "Two@gmail.com",
        departments: ["Computer"],
      },
      {
        name: "Employee Three",
        age: 10,
        email: "Three@gmail.com",
        departments: ["Physics", "Chemistry"],
      },
      {
        name: "Employee Four",
        age: 60,
        email: "Four@gmail.com",
        departments: ["Chemistry", "Physics"],
      },
      {
        name: "Employee Five",
        age: 70,
        email: "Five@gmail.com",
        departments: ["Computer", "Physics", "Chemistry"],
      },
      {
        name: "Employee Six",
        age: 70,
        email: "Six@gmail.com",
        departments: ["Computer", "Physics"],
      },
    ];
  }
  searchData(){
    this.serchedDeptData = [];
  
    this.employees = this.allEmployes.filter((data) =>
    data.name.toLowerCase().includes(this.searchName.toLowerCase())
    );
    for(var val of this.employees){
      
      if(val.departments.includes(this.searchDepartment)){
        this.serchedDeptData.push(val)

      }
    }
    this.employees=this.serchedDeptData;


  }
   
  

}
