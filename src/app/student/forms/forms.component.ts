import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  loginform: FormGroup;
  constructor(private fb : FormBuilder){}

  ngOnInit():void{
    this.loginform= this.fb.group({
      name:['',[Validators.required,Validators.maxLength(5),Validators.minLength(3)]],
      password:['',[Validators.required,Validators.maxLength(5)]],
      email:['',[Validators.required,Validators.email]]
    })
  }
  // formcontrol(name){
  //   return this.loginform.get(name);
  //       }

formvaluecontrol(name){
return this.loginform.get(name);
}

datasubmit(){
console.log(this.loginform.value);

}

}
