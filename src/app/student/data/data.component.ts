import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  data= null;

  items = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
  ]

  onreceived(evt:any){
    console.log(evt);
    this.data = evt;


  }

}
