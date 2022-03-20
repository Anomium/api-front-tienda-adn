import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  constructor(protected productoServices: ProductoService) { }
  
  ngOnInit() {
    this.construirFormularioProducto();
  }

  crear() {
    this.productoServices.guardar(this.productoForm.value)
    .subscribe(() => 
      Swal.fire({
        icon:'info',
        title:'Agregado',
        text: 'Se agregado correctamente al carrito de compra.'
      })
    )
    this.construirFormularioProducto();
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
