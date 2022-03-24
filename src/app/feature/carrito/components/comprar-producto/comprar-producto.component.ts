import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Carrito } from 'src/app/feature/carrito/components/shared/model/carrito';
import { CarritoService } from 'src/app/feature/carrito/components/shared/service/carrito.service';
import { DialogoService } from '@producto/shared/service/dialogo.service';
import { CarritoCompra } from '../shared/model/carritoCompra';
import { CarritoDelete } from '../shared/model/carritoDelete';

@Component({
  selector: 'app-comprar-producto',
  templateUrl: './comprar-producto.component.html',
  styleUrls: ['./comprar-producto.component.css']
})
export class ComprarProductoComponent implements OnInit {
  listaCarrito: Carrito[];
  
  public carritoCompra: CarritoCompra = new CarritoCompra();
  public carritoDelete: CarritoDelete;

  carritoCompraFormBuilder = this.fb.group({
    cupon: ['', [Validators.required]]
  })


  constructor(
    protected carritoService: CarritoService, 
    protected dialogo: DialogoService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.carritoService.consultarCarritos()
      .subscribe(data => {
        this.listaCarrito = data
        console.log(this.listaCarrito);
      });
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
    // this.limpiarFormulario();
  }

  eliminar(carrito: Carrito) {
    this.carritoDelete = new CarritoDelete(
      carrito.id
    );
    this.carritoService.eliminar(this.carritoDelete);
  }

  // limpiarFormulario() {
  //   this.carritoCompraForm.reset();
  // }

  enviado() {
    console.log(this.carritoCompraFormBuilder.value)
  }
  
}
