import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SoporteService } from '@producto/shared/service/soporte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-soporte',
  templateUrl: './crear-soporte.component.html',
  styleUrls: ['./crear-soporte.component.css']
})
export class CrearSoporteComponent implements OnInit {
  soporteForm: FormGroup;
  valorId: number;

  constructor(protected soporteService: SoporteService) { }

  ngOnInit(): void {
    this.construirFormularioProducto();
  }

  public crear():number {
    this.soporteService.guardar(this.soporteForm.value)
      .subscribe(() => {
        Swal.fire({
          icon:'info',
          title:'Agregado',
          text: 'Se actualizó la consignación correctamente'
        })
        this.valorId = 1;
      }
    );
    return this.valorId;
  }

  private construirFormularioProducto() {
    this.soporteForm = new FormGroup({
      descripcion: new FormControl('',[Validators.required])
    });
  }

}
