import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogservService } from 'gurds/logserv.service';
import { ValidService } from '../services/valid.service';

@Component({
  selector: 'app-dailogcon',
  templateUrl: './dailogcon.component.html',
  styleUrls: ['./dailogcon.component.css']
})
export class DailogconComponent implements OnInit {

  addform=new FormGroup({
    accountname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    server:new FormControl('',[Validators.required]),
    serverport:new FormControl('',[Validators.required]),
    outserver:new FormControl('',[Validators.required]),
    outserverport:new FormControl('',[Validators.required]),

})
  constructor(public valid:ValidService) { }

  save()
  {this.valid.accdata(this.addform.value).subscribe(x=>alert('Account Added Successfully !!')); }


  ngOnInit(): void { }
}
