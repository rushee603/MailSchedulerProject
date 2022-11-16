import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ValidService } from '../services/valid.service';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})

export class UpdatedataComponent implements OnInit {

  constructor(private valid:ValidService, public dailog: MatDialogRef<UpdatedataComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
    addform= new FormGroup({
    accountname:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    server:new FormControl('',[Validators.required]),
    serverport:new FormControl('',[Validators.required]),
    outserver:new FormControl('',[Validators.required]),
    outserverport:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
    
    this.addform.get("accountname")?.setValue(this.data.accountname);
    this.addform.get("email")?.setValue(this.data.email);
    this.addform.get("password")?.setValue(this.data.password);
    this.addform.get("server")?.setValue(this.data.server);
    this.addform.get("serverport")?.setValue(this.data.serverport);
    this.addform.get("outserver")?.setValue(this.data.outserver);
    this.addform.get("outserverport")?.setValue(this.data.outserverport)
  }


  save(){ this.valid.update(this.addform.value,this.data.id).subscribe(response => {
           alert(" Data Updated Successfully ");}, error => { alert(error);})}

      delete(){ this.valid.delete(this.data.id).subscribe(x=>alert("data deleted ")) }
}
