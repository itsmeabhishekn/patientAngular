import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api: ApiService) { }

  id = ""

  searchdata: any = {}



  readValues = () => {


    let data: any = {
      "id": this.id
    }
    console.log(data)
    this.api.searchPatient(data).subscribe(
      (response: any) => {
        console.log(response)
        if (response.length == 0) {
          alert("no result found")
        }
        else {
          this.searchdata = response
        }
      }
    )
  }

  deleteBtnClick = (id: any) => {
    let data: any = { "id": id }
    this.api.deletePatient(data).subscribe(
      (searchdata: any) => {
        console.log(searchdata)
      }
    )
  }


}

