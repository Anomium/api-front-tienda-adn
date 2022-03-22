import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Soporte } from '../model/soporte';

@Injectable()
export class SoporteService {

  constructor(protected http: HttpService) { }

  public guardar(soporte: Soporte) {
    return this.http.doPost<Soporte, boolean>(`${environment.endpoint}/soporte`, soporte,
                                                      this.http.optsName('crear'));
  }

  public consultar() {
    return this.http.doGet<Soporte[]>(`${environment.endpoint}/soporte`, this.http.optsName('consultar soportes'));
  }
}
