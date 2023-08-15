import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-member-signup',
  templateUrl: './member-signup.component.html',
  styleUrls: ['./member-signup.component.css']
})
export class MemberSignupComponent implements OnInit {

 public signupForm!: FormGroup
constructor(private formbuilder:FormBuilder,private http: HttpClient, private router:Router){}
ngOnInit(): void {
  this.signupForm=this.formbuilder.group({
    fullname:[''],
    email:[''],
    mobile:[''],
    password:['']
  })
    
}
signUp(){
this.http.post<any>("http://localhost:3000/authentication",this.signupForm.value)
.subscribe(res=>{
  alert("Signup Sucessful");
  this.signupForm.reset();
  this.router.navigate(['login']);
},err=>{
  alert("Error")
})
}
}
