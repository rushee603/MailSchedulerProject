
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidService } from '../services/valid.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  title = 'abc';
  regForm: FormGroup;
  constructor(private dataService: ValidService) {  
      
  this.regForm = new FormGroup({
  email: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.minLength(6),Validators.maxLength(10)]),
  confirmpass: new FormControl('', [Validators.required])
},
//  { validators:this.Mustmatch('password','confirmpass')
)}


stored()
{ const data=this.regForm.value
  this.dataService.savedata(data).subscribe(x=>alert("Registation Successfully "))}

Mustmatch( password:any ,confirmpass:any){
    return(formGroup:FormGroup)=>{
    const passwordcontrol=formGroup.controls[password];
    const compasswordcontrol=formGroup.controls[confirmpass];

    if(compasswordcontrol.errors && compasswordcontrol.errors['Mustmatch']){
      return;
    }
    if(passwordcontrol.value!=compasswordcontrol.value){
      compasswordcontrol.setErrors({Mustmatch:true});

    }else{
      compasswordcontrol.setErrors(null);
    }
}
}

ngOnInit(): void {
}
}
