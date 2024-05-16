import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentformComponent } from './appointmentform/appointmentform.component';
import { ItemllistComponent } from './itemllist/itemllist.component';

const routes: Routes = [

  {path:"appointmentform" , component:AppointmentformComponent},
  {path:"itemlist",component:ItemllistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
