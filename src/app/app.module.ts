import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { EmpleadoService } from './empleado.service';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { CreateEmpleadoComponent } from './create-empleado/create-empleado.component';
import { EmpleadoDetailsComponent } from './empleado-details/empleado-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListComponent,
    CreateEmpleadoComponent,
    EmpleadoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
