import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Carrito } from '../model/carrito';
import { CarritoCompra } from '../model/carritoCompra';
import { CarritoDelete } from '../model/carritoDelete';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(protected http: HttpService) { }

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

  public eliminar(carrito: CarritoDelete) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/carritos/${carrito.id}`,
                                                 this.http.optsName('eliminar carrito'));
  }
}
