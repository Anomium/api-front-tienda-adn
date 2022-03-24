import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Carrito } from 'src/app/feature/carrito/components/shared/model/carrito';
import { CarritoService } from 'src/app/feature/carrito/components/shared/service/carrito.service';
import { DialogoService } from '@producto/shared/service/dialogo.service';
import { CarritoCompra } from 'src/app/feature/carrito/components/shared/model/carritoCompra';
import { CarritoDelete } from 'src/app/feature/carrito/components/shared/model/carritoDelete';

@Component({
  selector: 'app-comprar-producto',
  templateUrl: './comprar-producto.component.html',
  styleUrls: ['./comprar-producto.component.css']
})
export class ComprarProductoComponent implements OnInit {
  public listaCarrito: Carrito[];

  public carritoCompra: CarritoCompra = new CarritoCompra();
  public carritoDelete: CarritoDelete;

  carritoCompraForm: FormGroup;

  constructor(protected carritoService: CarritoService, protected dialogo: DialogoService) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.carritoService.consultarCarritos()
      .subscribe(data => this.listaCarrito = data);
  }

  comprar(carrito: Carrito) {
    this.carritoCompra.id = carrito.id;
    this.carritoCompra.precio = carrito.precio;
    this.carritoCompra.cantidad = carrito.cantidad;
    this.carritoService.comprar(this.carritoCompra)
      .subscribe(() =>
        this.dialogo.mostrarMensajeExitoDialog('Se ha comprado el producto con exitos.')
      );
    this.consultar();
    this.limpiarFormulario();
  }

  eliminar(carrito: Carrito) {
    this.carritoDelete = new CarritoDelete(
      carrito.id
    );
    this.carritoService.eliminar(this.carritoDelete);
  }

  limpiarFormulario() {
    this.carritoCompraForm.reset();
  }
}
