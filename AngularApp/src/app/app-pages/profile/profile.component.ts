import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userForm : FormGroup;
  IsSusceed:boolean;
  IsFailed:boolean;

  constructor(private fb : FormBuilder, private userService : UserService) { 
      this.userForm = this.fb.group({
        Id: [],
        Name: [null, [Validators.required,Validators.maxLength(100)]],
        Email: [null, [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
        Mobile: [null,Validators.pattern("^\\d{10}$")],
        Password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        IsActive: [true]
      })
  }
  get f()
  {
    return this.userForm.controls;
  }
  ngOnInit() {
    this.userService.getUserDetails().subscribe((data:User) => {
      this.f.Id.setValue(data.Id);
      this.f.Name.setValue(data.Name);
      this.f.Email.setValue(data.Email);
      this.f.Mobile.setValue(data.Mobile);
      this.f.Password.setValue(data.Password);
      this.f.IsActive.setValue(data.IsActive);
    },
     err =>{
      console.log(err)
     });
  }
  saveData(userData:NgForm)
  {
    if(userData.valid)
    {
       this.userService.updateUser(userData.value).subscribe( res => {
         if(res.status == 202)
         {
           this.IsSusceed = true;
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
}
