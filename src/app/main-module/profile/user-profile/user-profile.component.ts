import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
// import { SignupComponent } from 'src/app/signup/signup.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  interestArray: any[] = [];
  profileForm = new FormGroup({
       name: new FormControl(null, Validators.required),
       email:new FormControl(null, Validators.required),
       description:new FormControl(null, Validators.required),
       interestArray: new FormArray([
         new FormControl(null,Validators.required)
       ])
})
  constructor(private interest:AuthService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    const name=this.profileForm.value;
    const email=this.profileForm.value;
    const id=localStorage.getItem("userId");
    console.log(id);
    this.interest.userId(id).subscribe((result:any)=>{
      this.profileForm = new FormGroup({
       name: new FormControl(result.data['name']),
       email: new FormControl(result.data['email'])
     });
     this.interest.userName.next(result.data['name'])
   })
    }
  onaddInterest(){
       this.interestArray.push('new', new FormControl('', Validators.required))
  }
   onSubmit(){
    //  const name=this.profileForm.value;
    // const email=this.profileForm.value;
    //  const interestType=this.profileForm.value;
    //  const description= this.profileForm.value;
    // const profilePicture=this.profileForm.value;
    this.interest.updateProfile(this.profileForm.value).subscribe((result:any)=>{
     console.log(result)
    })    
}
}

