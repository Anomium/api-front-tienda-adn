import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogoService } from '@producto/shared/service/dialogo.service';
import { SoporteService } from '@producto/shared/service/soporte.service';

@Component({
  selector: 'app-crear-soporte',
  templateUrl: './crear-soporte.component.html',
  styleUrls: ['./crear-soporte.component.css']
})
export class CrearSoporteComponent implements OnInit {
  soporteForm: FormGroup;

  constructor(protected soporteService: SoporteService, protected dialogo: DialogoService) { }

  ngOnInit(): void {
    this.construirFormularioProducto();
  }

  public crear() {
    this.soporteService.guardar(this.soporteForm.value)
      .subscribe(() => {
        this.dialogo.mostrarMensajeExitoDialog('Se guardo correctamente')
      });
  }

  private construirFormularioProducto() {
    this.soporteForm = new FormGroup({
      descripcion: new FormControl('', [Validators.required])
    });
  }

}
