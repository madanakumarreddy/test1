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
  departments1:any[]=new Array();
  serchedNameData:LEmployees[]= new Array();
  serchedDeptData:LEmployees[]= new Array();
  departmentArray:any[]=new Array();
  departmentArray1:any[]=new Array();

  sortElements=["Name(a-z)","Name(z-a)",'age','email'];
  employee: LEmployees[];


  

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
    this.sortingData("Name(a-z)");
    for(let i of this.allEmployes){
      for(let j of i.departments){
        this.departmentArray.push(j);

      }
    }
    this.departments1 = this.departmentArray.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
  })
  console.log('......../////////',this.departments1);
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
  sortingData(data){
    console.log("sortingData",data)
    if (data=='Name(a-z)'){
      this.employees.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
    }
    if (data=='Name(z-a)'){
      this.employees.sort((a, b) => a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
    }
    if (data=='age'){
      this.employees.sort((a, b) => a.age < b.age ? -1 : a.age > b.age ? 1 : 0)
    }
    if (data=='email'){
      this.employees.sort((a, b) => a.email < b.email ? -1 : a.email > b.email ? 1 : 0)
    }
  }
  searchData(){
    this.serchedDeptData = [];
    this.employee = this.allEmployes.filter((data) =>
    data.name.toLowerCase().includes(this.searchName.toLowerCase())
    );
    if(this.searchDepartment !=''){
      for(var val of this.employee){
      
        if(val.departments.includes(this.searchDepartment)){
          this.serchedDeptData.push(val)
  
        }
      }
      this.employees=this.serchedDeptData;
    }
    else{
      this.employees=this.employee
    }
    
   

  }
  
   
  

}
