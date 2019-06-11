import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: []
})
export class PipeComponent implements OnInit {
  title:string;
  employees=[];
  constructor() { 
    this.title = "Built in Pipe Decorators";
    this.employees = [{name:"Mukesh",address:"Dhanbad",salary:50000,doj:new Date(2018,11,24)},
    {name:"Ram",address:"Kolkata",salary:20000,doj:new Date(2018,11,20)},
    {name:"Shayam",address:"Mumbai",salary:30000,doj:new Date(2018,11,19)},
    {name:"Suresh",address:"Noida",salary:40000,doj:new Date(2018,11,6)}]
  }

  ngOnInit() {
  }

}
