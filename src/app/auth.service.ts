import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';  

 interface IUser {
  email?:string,
  password?:string,
  profilePicture?:string,
  name?:string,
  token?:string,
  interestType?:string[],
  description?:string,
  _id?:string,
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  basePath=`https://adeel-demo.herokuapp.com/api/users/`
  userSignup =`${this.basePath}`
  userLogin=`${this.basePath}login`;
  userById=`${this.basePath}`;
  update=`${this.basePath}`;
  public userName = new BehaviorSubject<any>("");    
  public  todos: Observable<any> = this.userName.asObservable();

  constructor(private http:HttpClient) {
    this.userName.next('');
   }
  SignUp(name:string, email:string, profilePicture:string, token:string, password:string){
    return this.http.post<IUser>(this.userSignup,
      {
        email:email,
        password:password,
        profilePicture:profilePicture,
        name:name,
        token:token
      } )
  }
  Login(email:string, password:string){
    return this.http.post<IUser>(this.userLogin,
      { email:email, 
        password:password
      })
      // console.log(result.)
  }
 userId(_id:any){
   return this.http.get<IUser>(this.userById+_id)
 }
 updateProfile(modal:any){
   return this.http.patch(this.update + localStorage.getItem('userId'),
    {
      name:modal.name,
      email:modal.email,
      interestType:modal.interestType,
      description:modal.description,
      profilePicture:modal.profilePicture
    })
 }
 
}