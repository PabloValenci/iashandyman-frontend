import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpleadoComponent } from './create-empleado/create-empleado.component';
import { EmpleadoDetailsComponent } from './empleado-details/empleado-details.component';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';

const routes: Routes = [
  {path: 'empleados', component: EmpleadoListComponent},
  {path: 'create-empleado', component: CreateEmpleadoComponent},
  {path: '', redirectTo: 'empleados', pathMatch:'full'},
  {path: 'empleado-details/:id', component: EmpleadoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
