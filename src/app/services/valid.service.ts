import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ValidService {
  isAuthenticated: any;

  constructor(private http:HttpClient) { }

  reg="http://localhost:3000/register"

  login1=" http://localhost:3000/authenticate"

  addAcount=" http://localhost:3005/accDeatail"

  schedulemail=" http://localhost:3005/mailinfo"

  updateAccInfo=" http://localhost:3005/accDeatail"

  

  savedata(data:any) { return this.http.post(this.reg,data);}


  checkData(data:any) {return this.http.post(this.login1,data) }

  
  accdata(data:any) { return this.http.post(this.addAcount,data);}


  mail(data:any) { return this.http.post(this.schedulemail,data);}


  getData() {return this.http.get(this.addAcount);}


  getinfo() {return this.http.get(this.schedulemail);}


  update(data:any,id:any) { return this.http.put(this.updateAccInfo+"/"+id,data) }


  delete(id:any) {return this.http.delete("http://localhost:3005/accDeatail/"+id) }
  
}