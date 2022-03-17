import { Component, OnInit } from '@angular/core';
import { Carrito } from '@producto/shared/model/carrito';
import { CarritoCompra } from '@producto/shared/model/carritoCompra';
import { Producto } from '@producto/shared/model/producto';
import { ProductoService } from '@producto/shared/service/producto.service';

@Component({
  selector: 'app-comprar-producto',
  templateUrl: './comprar-producto.component.html',
  styleUrls: ['./comprar-producto.component.css']
})
export class ComprarProductoComponent implements OnInit {
  public listaCarrito: Carrito[];
  carrito: CarritoCompra;

  constructor(protected productoService: ProductoService) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.productoService.consultarCarritos()
    .subscribe(data => this.listaCarrito = data)
  }

  comprar(producto: Producto) {
    this.carrito = new CarritoCompra(
      producto.id,
      '' //Debe ir la variable que trae el dato del cupon del html
    );
    this.productoService.comprar(this.carrito)
    .subscribe(data => console.log(data));
    this.consultar();
  }

}
