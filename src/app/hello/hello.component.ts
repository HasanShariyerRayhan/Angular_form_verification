import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
nameofp:'';
email?:'';


onsubmit(){
  console.log('event fire');
  alert(this.nameofp);

}
onchange(ev:any){
  this.nameofp=ev.target.value;
  console.log(ev.target.value);

}
onadd(){
  alert(this.email);
  console.log('email event fire');

}

}

