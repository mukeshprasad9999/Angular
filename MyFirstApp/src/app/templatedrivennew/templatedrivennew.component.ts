import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivennew',
  templateUrl: './templatedrivennew.component.html',
  styles: []
})
export class TemplatedrivennewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  saveData(UserForm:NgForm)
  {
    if(UserForm.valid)
    {
      console.log(UserForm.value);
    }
  }
}
