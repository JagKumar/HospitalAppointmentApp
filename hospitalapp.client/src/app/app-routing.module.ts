import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './_components/newappointment/add-edit/add-edit.component';
import { ListComponent } from './_components/newappointment/list/list.component';


const routes: Routes = [
  // otherwise redirect to home
  { 
    path: '**', 
    redirectTo: 'home',
    pathMatch:'full'
   },
   {
    path:'Appointment',
    component:ListComponent
   },
   { path: 'Appointment/edit/:id', component: AddEditComponent },
   { path: 'AddNew', component: AddEditComponent },
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
