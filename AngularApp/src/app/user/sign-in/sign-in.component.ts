import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginFormGroup : FormGroup;
  IsFailed:boolean;

  constructor(private fb:FormBuilder,private userService : UserService, private router:Router) {
    this.loginFormGroup = fb.group({
      Email:[null,[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
      Password:[null,[Validators.required]]
    });
    this.IsFailed = false;
   }

  get f() { return this.loginFormGroup.controls; }
  Authenticate(loginForm : NgForm)
  {
    if(loginForm.valid)
    {
       this.userService.userAuthentication(loginForm.value).subscribe((res:any) => {
         if(res.status == 200)
         {
            localStorage.setItem('userToken',res.body.access_token);
            this.router.navigate(['/home']);
         }
       },
       err =>{
        this.IsFailed = true;
        console.log(err);
       })
    }
    else{
       console.log('Invalid Data!');
    }
  }
  ngOnInit() {
    if(localStorage.getItem('userToken') != null)
        this.router.navigate(['/home']);
  }

}
