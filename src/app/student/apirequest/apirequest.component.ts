import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { RequestService } from '../sevice/request.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-apirequest',
  templateUrl: './apirequest.component.html',
  styleUrls: ['./apirequest.component.css']
})

export class ApirequestComponent implements OnInit {
  data: any;
  isloading = true;
  dataupdate = false;
  alert=false;
  formdata: FormGroup
  constructor(private requestservice: RequestService, private fb: FormBuilder) {
  }
  result = null;

  ngOnInit(): void {
    this.formdata = this.fb.group({
      id: [''],
      userId: [''],
      title: [''],
      body: ['']
    })

    this.requestservice.getdata().pipe(
      tap(() => {
        this.isloading = false;
      }),
      //    map((res:any)=>{
      // return res.filter((p:any) =>p.userId==1)
      //    })
    )
      .subscribe((res) => {
        this.data = res;
      })

  }

  createdata() {
    if (!this.dataupdate) {
      this.requestservice.createdata(this.formdata.value)
        .subscribe((res) => {
          console.log(res);
          this.data.push(res);
          this.formdata.reset();
        })
    }
    else {
      this.requestservice.updatedata(this.formdata.value)
        .subscribe((res) => {
          const tempdata = this.data.find((i) => i.id === res.id);
          const position = this.data.indexOf(tempdata);
          this.data[position] = res;
          console.log(res);
          // this.data.push(res)
          this.formdata.reset();
          this.alert=true;
          this.dataupdate = false;

        })
    }


  }

  selectdata(data) {
    console.log(data);
    this.formdata.patchValue(data);
    this.dataupdate = true;


  }

  deletedata(Id){
this.requestservice.deletedata(Id)
.subscribe((result)=>{
console.log(result);
this.data=this.data.filter((i) => i.id !==Id)
})
  }

}
