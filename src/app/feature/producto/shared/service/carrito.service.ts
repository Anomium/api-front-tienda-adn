import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carrito } from '../model/carrito';
import { CarritoCompra } from '../model/carritoCompra';
import { CarritoDelete } from '../model/carritoDelete';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(protected http: HttpService) { }

  public crearCarrito(carrito: Carrito): Observable<number> {
    return this.http.doPost<Carrito, number>(`${environment.endpoint}/carritos`, carrito,
      this.http.optsName('crear'));
  }

  public comprar(carrito: CarritoCompra) {
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
