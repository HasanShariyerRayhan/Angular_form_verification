import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { FormsComponent } from './forms/forms.component';
import { ApirequestComponent } from './apirequest/apirequest.component';

const routes: Routes = [{
  path:' ',
  component:FormsComponent
},
{
  path:'api',
  component:ApirequestComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
