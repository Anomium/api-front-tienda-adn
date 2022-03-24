import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Soporte } from '../model/soporte';
import { SoporteService } from './soporte.service';


describe('SoporteService', () => {
  let httpMock: HttpTestingController;
  let service: SoporteService;
  const apiEndpointSoportes = `${environment.endpoint}/soporte`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SoporteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(SoporteService);
  });

  it('should be created', () => {
    const soporteService: SoporteService = TestBed.inject(SoporteService);
    expect(soporteService).toBeTruthy();
  });

  it('deberia listar soportes', () => {
    const dummySoporte = [
      new Soporte('1', 'Soporte 1', '2022-01-01'),
      new Soporte('2', 'Soporte 2', '2022-01-01')
    ];
    service.consultar().subscribe(productos => {
      expect(productos.length).toBe(2);
      expect(productos).toEqual(dummySoporte);
    });
    const req = httpMock.expectOne(apiEndpointSoportes);
    expect(req.request.method).toBe('GET');
    req.flush(dummySoporte);
  });

  it('deberia crear un producto', () => {
    const dummySoporte = new Soporte('1', 'Soporte 1', '2022-01-01');
    service.guardar(dummySoporte).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointSoportes);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

});
