import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  username=""

address=""
number=""
date=""
url=""
doctor=""

constructor(private api:ApiService){}
eventEntry=()=>
{
  let data0:any={
  "username":this.username,
 
   "address":this.address,
   "number":this.number,
   "date":this.date,
   "url":this.url,
   "doctor":this.doctor
   }
   console.log(data0)
   this.api.addpatient(data0).subscribe(
    (response:any)=>
    {
      console.log(response)
    }
   )
}

}
