import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DailogconComponent } from '../dailogcon/dailogcon.component';
import { ValidService } from '../services/valid.service';
import { UpdatedataComponent } from '../updatedata/updatedata.component';

@Component({
  selector: 'app-dashcomp',
  templateUrl: './dashcomp.component.html',
  styleUrls: ['./dashcomp.component.css']
})
export class DashcompComponent implements OnInit {
 
  constructor(public dialog: MatDialog ,public valid:ValidService) {}

   details: any;
    accinfo:any;

    mailschedule=new FormGroup({
      to:new FormControl('',[Validators.required]),
      cc:new FormControl('',[Validators.required]),
      bcc:new FormControl('',[]),
      Subject:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      time:new FormControl('',[Validators.required]),
      sendermail:new FormControl('')
    })
    // data:any;
    // onselect(x:any){
    //   this.data=x;
    // }

    ngOnInit(): void {
      this.get(); this.getD(); }

    open(value: any)
    { const dialogRef = this.dialog.open(UpdatedataComponent,{
        data: value });
         dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`); });}
    
       openDialog(){
      const dialogRef = this.dialog.open(DailogconComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`); }); 
      }


    schedule() { 
        // this.mailschedule.patchValue({sendermail:this.data.})
      this.valid.mail(this.mailschedule.value).subscribe(x=>alert('Mail Scheduled')); }

    get()
      {this.valid.getData().subscribe(x=>this.accinfo=x)}

    getD()
      {this.valid.getinfo().subscribe(x=>this.details=x)}

 }
  
  
   
 

