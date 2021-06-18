import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signUp:AuthService, private router: Router) { }
collectApi:any[]=[];
  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
     const name= form.value.name;
    const email=form.value.email;
     const profilePicture=form.value.profilePicture;
    const password=form.value.password;
     const token=form.value.token;
    if(!form.valid)
    {
      return;
    }
    else{
    this.signUp.SignUp(name, email, profilePicture, token, password).subscribe((result:any)=>{
    this.collectApi=result;
    this.router.navigate(['/login'])
    },error=>{
      console.log(error); 
    }
    );
    form.resetForm();
  }
  }

}
