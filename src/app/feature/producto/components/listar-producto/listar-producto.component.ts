import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';
import { Carrito } from '@producto/shared/model/carrito';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  public listaProductos: Producto[];
  carrito: Carrito;
  constructor(protected productoService: ProductoService, private router: Router) { }

  ngOnInit() {
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

  crearCarrito(producto: Producto) {
    
    this.carrito = new Carrito(producto.id, 
      producto.nombre, 
      producto.precio, 
      producto.precio * producto.cantidad,
      producto.cantidad,
      ''
    );

    this.productoService.crearCarrito(this.carrito)
    .subscribe(data => {
      console.log(data)
    });
  }
}
