import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';
import { Carrito } from '@producto/shared/model/carrito';
import { CarritoService } from '@producto/shared/service/carrito.service';
import { DialogoService } from '@producto/shared/service/dialogo.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  public listaProductos: Producto[];
  carrito: Carrito;
  valorId:number;

  constructor(protected productoService: ProductoService, 
    protected carritoService: CarritoService, 
    private router: Router,
    protected dialogService: DialogoService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.productoService.consultar()
    .subscribe(data => {
      this.listaProductos = data
    });
  }

  editar(producto: Producto) {
    localStorage.setItem('id', producto.id);
    this.router.navigate(['/producto/actualizar']);
  }

  eliminar(producto: Producto) {
    this.productoService.eliminar(producto)
    .subscribe(err => console.log(err));
  }

  crearCarrito(producto: Producto): number {
    this.carrito = new Carrito(producto.id, 
      producto.nombre, 
      producto.precio, 
      producto.precio * producto.cantidad,
      producto.cantidad,
      ''
    );

    this.carritoService.crearCarrito(this.carrito)
    .subscribe((data) => {
      this.dialogService.mostrarMensajeInformacionDialog('Se agregado correctamente al carrito de compra.')
      this.valorId = data;
    });
    return this.valorId;
  }
}
