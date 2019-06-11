import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm  } from "@angular/forms";

@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styleUrls: ['./modeldriven.component.css']
})
export class ModeldrivenComponent implements OnInit {
  userFormGroup:FormGroup;
  submitted:boolean = false;

  constructor(private fb:FormBuilder) {
    
   }

   ngOnInit() {
    this.userFormGroup = this.fb.group({ 
      UserName: [null, [Validators.required,Validators.minLength(5)]],
      Email: [null, [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
      Contact: [null,Validators.pattern("^\\d{10}$")],
      Password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      AcceptTerms:[null,Validators.required]
     });
  }

   get f() { return this.userFormGroup.controls; }

   saveData()
   {
     this.submitted = true;
     if(this.userFormGroup.valid)
     {
        console.log(this.userFormGroup.value);
     }
     else{
        console.log('Invalid Data!');
     }
   }
  

}
