import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
path:'',
loadChildren:()=> import('./student/student.module').then((m)=>m.StudentModule)
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:' ',
    component:EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
