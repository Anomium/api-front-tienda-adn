import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';


@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Producto[]>(`${environment.endpoint}/productos`, this.http.optsName('consultar productos'));
  }

  public consultarPorId(id: string) {
    return this.http.doGet<Producto>(`${environment.endpoint}/productos/${id}`, this.http.optsName('consultar productos'));
  }

  public guardar(producto: Producto): Observable<number> {
    return this.http.doPost<Producto, number>(`${environment.endpoint}/productos`, producto,
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

}
