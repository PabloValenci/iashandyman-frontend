import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent implements OnInit {


  empleado: Empleado = new Empleado();
  constructor(private empleadoService: EmpleadoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmpleado(){
    this.empleadoService.createEmpleado(this.empleado).subscribe(data =>{
      this.getToEmpleadoList();
      console.log(data);
    },
    error => console.log(error));
  }

  getToEmpleadoList(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
    console.log(this.empleado);

    // this.isValidDate = this.validateDates(fechaInicio, fechaFin);
    // if(!this.isValidDate){
      this.saveEmpleado();
    // }

    
  }

  // validateDates(sDate: string | null, eDate: string | null){
  //   this.isValidDate = true;
  //   if((sDate == null || eDate ==null)){
  //     this.error={isError:true,errorMessage:'Fecha inicio y Fecha fin son requeridos'};
  //     this.isValidDate = false;
  //   }

  //   if((sDate != null && eDate !=null) && (eDate) < (sDate)){
  //     this.error={isError:true,errorMessage:'Fecha fin es más grande que fecha inicio'};
  //     this.isValidDate = false;
  //   }
  //   return this.isValidDate;
  // }
}
