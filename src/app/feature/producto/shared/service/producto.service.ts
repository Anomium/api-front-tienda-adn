import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Carrito } from '../model/carrito';
import { CarritoCompra } from '../model/carritoCompra';
import { Producto } from '../model/producto';


@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Producto[]>(`${environment.endpoint}/productos`, this.http.optsName('consultar productos'));
  }

  public guardar(producto: Producto) {
    return this.http.doPost<Producto, boolean>(`${environment.endpoint}/productos`, producto,
                                                this.http.optsName('crear'));
  }

  public eliminar(producto: Producto) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${producto.id}`,
                                                 this.http.optsName('eliminar productos'));
  }

  public actualizar(producto: Producto) {
    return this.http.doPut<Producto, boolean>(`${environment.endpoint}/productos/${producto.id}`, producto,
                                                this.http.optsName('actualizar'));
  }

  public crearCarrito(carrito: Carrito) {
    return this.http.doPost<Carrito, boolean>(`${environment.endpoint}/carritos`, carrito,
    this.http.optsName('crear'));
  }

  public comprar(carrito: CarritoCompra) {
    console.log(`${environment.endpoint}/carritos/${carrito.id}`)
    return this.http.doPut<CarritoCompra, boolean>(`${environment.endpoint}/carritos`, carrito,
    this.http.optsName('actualizar'));
  }

  public consultarCarritos() {
    return this.http.doGet<Carrito[]>(`${environment.endpoint}/carritos`, this.http.optsName('consultar carritos'));
  }

}
