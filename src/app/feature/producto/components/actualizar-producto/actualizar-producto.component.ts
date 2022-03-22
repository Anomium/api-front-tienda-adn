import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from '@producto/shared/model/producto';
import { DialogoService } from '@producto/shared/service/dialogo.service';
import { ProductoService } from '@producto/shared/service/producto.service';


@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  public listaProductos: Producto[];
  actualizarProductoForm: FormGroup;
  id:string;

  producto: Producto = new Producto();
  constructor(private productoService: ProductoService, 
    protected dialogo: DialogoService) { }

  ngOnInit(): void {
    this.construirFormularioProducto(this.producto);
    this.consultar();
    console.log(this.producto.nombre)
  }

  consultar() {
    this.id = localStorage.getItem('id');
    this.productoService.consultarPorId(this.id)
    .subscribe(data => this.producto = data);
  }

  actualizarProducto() {
    this.construirFormularioProducto(this.producto);
    
    this.productoService.actualizar(this.producto)
    .subscribe(() => {
      this.dialogo.mostrarMensajeInformacionDialog('Se actualizó correctamente')
    })
  }

  private construirFormularioProducto(producto: Producto) {
    this.actualizarProductoForm = new FormGroup({
      id: new FormControl(producto.id,[Validators.required]),
      nombre: new FormControl(producto.nombre,[Validators.required]),
      precio: new FormControl(producto.precio,[Validators.required]),
      cantidad: new FormControl(producto.cantidad,[Validators.required]),
      fechaCreacion: new FormControl(producto.fechaCreacion,[Validators.required])

    });
  }

}
