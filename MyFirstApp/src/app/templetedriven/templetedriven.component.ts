import { Component, OnInit } from '@angular/core';
import { user } from '../../models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-templetedriven',
  templateUrl: './templetedriven.component.html',
  styleUrls: ['./templetedriven.component.css']
})
export class TempletedrivenComponent implements OnInit {
  User : any;
  constructor() {
    this.User = { UserName : "Mukesh",
  Email:"mukesh@tnspl.in",
  Contact:"8882163228",
  Password:"abcdef",
  AcceptTerms:true
  };
   }
  saveData(UserForm:NgForm)
  {
    if(UserForm.valid)
    {
      console.log(UserForm.value);
    }
  }
  ngOnInit() {
  }

}
