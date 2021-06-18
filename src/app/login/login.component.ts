import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  close:boolean=false;  
  constructor(private login:AuthService, private router:Router) { 
  }
  ngOnInit(): void { 
      
  }
showAlert(){
  this.close=true
};
closeAlert(){
  this.close=false
};
onSubmit(form: NgForm){
  const email=form.value.email;
  const password=form.value.password;
  this.login.Login(email, password).subscribe((result:any)=>{
    this.router.navigate(['/admin'])
    localStorage.setItem("userId",result.id)
    console.log(result.id);
    
    this.login.userName.next(result.name);
},error=>{
  console.log(error); 
});

}

}
