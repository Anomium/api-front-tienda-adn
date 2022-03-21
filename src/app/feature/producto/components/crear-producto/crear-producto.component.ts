import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Producto } from '@producto/shared/model/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  public productoForm: FormGroup;
  producto: Producto = new Producto();
  valorId:number;

  constructor(protected productoServices: ProductoService) { }
  
  ngOnInit() {
    this.construirFormularioProducto();
  }

  crear():number {
    this.productoServices.guardar(this.producto)
    .subscribe((data) => {
        Swal.fire({
          icon:'info',
          title:'Agregado',
          text: 'Se agregado correctamente al carrito de compra.'
        })
        this.valorId = data
      }
    )
    return this.valorId
  }

  limpiarFormulario(){
    this.productoForm.reset();
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      precio: new FormControl('',[Validators.required]),
      cantidad: new FormControl('',[Validators.required]),
      fechaCreacion: new FormControl('',[Validators.required])

    });
  }

}
