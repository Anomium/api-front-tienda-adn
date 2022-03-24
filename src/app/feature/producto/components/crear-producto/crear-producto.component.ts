import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Producto } from '@producto/shared/model/producto';
import { DialogoService } from '@producto/shared/service/dialogo.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  public productoForm: FormGroup;
  producto: Producto = new Producto();
  valorId: number;

  constructor(protected productoServices: ProductoService, protected dialogo: DialogoService) { }

  ngOnInit() {

    this.construirFormularioProducto();
  }

  crear(): number {
    this.productoServices.guardar(this.producto)
      .subscribe((data) => {
        this.valorId = data;
        this.dialogo.mostrarMensajeExitoDialog('Se ha registrado exitosamente.');
      });
    return this.valorId;
  }

  limpiarFormulario() {
    this.productoForm.reset();
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required]),
      fechaCreacion: new FormControl('', [Validators.required])
    });
  }


}
