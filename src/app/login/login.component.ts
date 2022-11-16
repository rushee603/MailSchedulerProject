import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LogservService } from 'gurds/logserv.service';
import { ValidService } from '../services/valid.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  title='abc';
  
  loginform=new FormGroup({ 
       email:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
       password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      })
 constructor(private dataService:ValidService,  private log:LogservService ,private r:Router) {}

  login()
  {   
   this.dataService.checkData(this.loginform.value).subscribe(
      ()=>{ alert("Login Successfully !!");

      this.log.isAuth=true;
    if(this.log.redirect!==null)
  this.r.navigate([this.log.redirect])
 else
 this.r.navigate([''])
}
    ,
      ()=>{alert("invalid Input !! ");})
   }

  ngOnInit(): void {
  }

}
