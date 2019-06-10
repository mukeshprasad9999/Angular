import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm  } from '@angular/forms';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpFormGroup : FormGroup;
  IsSusceed:boolean;
  IsFailed:boolean;
  constructor(private fb:FormBuilder, private userService: UserService) { 
    this.signUpFormGroup = fb.group({
    Name: [null, [Validators.required,Validators.maxLength(100)]],
    Email: [null, [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
    Mobile: [null,Validators.pattern("^\\d{10}$")],
    Password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    IsActive: [true]
    });
    this.IsSusceed = false;
    this.IsFailed = false;
  }
  get f() { return this.signUpFormGroup.controls; }

   saveData(signUpForm:NgForm)
   {
     if(signUpForm.valid)
     {
        this.userService.signUp(signUpForm.value).subscribe( res => {
          if(res.status == 201)
          {
            this.IsSusceed = true;
            signUpForm.resetForm();
          }
          else
            this.IsFailed = true;
        },
        err =>{ 
          console.log(err); 
          this.IsFailed = true;
        }
        );
     }
     else{
        console.log('Invalid Data!');
     }
   }
  
  ngOnInit() {
  }

}
