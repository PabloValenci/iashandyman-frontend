import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-details',
  templateUrl: './empleado-details.component.html',
  styleUrls: ['./empleado-details.component.css']
})
export class EmpleadoDetailsComponent implements OnInit {

  id: String | undefined
  empleado: Empleado | undefined
  constructor(private route: ActivatedRoute, private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.empleado = new Empleado();
    this.empleadoService.getEmpleadoById(this.route.snapshot.params['id']).subscribe( data => {
      this.empleado = data;
    })
  }

}
