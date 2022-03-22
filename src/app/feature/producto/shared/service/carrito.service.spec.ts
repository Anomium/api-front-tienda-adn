import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { CarritoService } from './carrito.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Carrito } from '../model/carrito';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '@angular/common/http';
import { CarritoCompra } from '../model/carritoCompra';

describe('CarritoService', () => {
  let service: CarritoService;
  let httpMock: HttpTestingController;
  let apiEndpointCarritos = `${environment.endpoint}/carritos`;
  beforeEach(() => {
    

    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarritoService, HttpService]
    });

    TestBed.configureTestingModule({});
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CarritoService);

  });

  it('should be created', () => {
    const carritoService: CarritoService = TestBed.inject(CarritoService);
    expect(carritoService).toBeTruthy();
  }); 

  it('deberia crear carrito ', () => {
    const carrito = new Carrito('1','prueba', 2000, 2000, 10, 'PENDIENTE');

    service.crearCarrito(carrito).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointCarritos);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia listar carritos', () => {
    const dummyCarritos = [
      new Carrito('1','prueba', 2000, 2000, 10, 'PENDIENTE'),
       new Carrito('2','prueba2', 2000, 2000, 10, 'PENDIENTE')
    ];
    service.consultarCarritos().subscribe(carritos => {
      expect(carritos.length).toBe(2);
      expect(carritos).toEqual(dummyCarritos);
    });
    const req = httpMock.expectOne(apiEndpointCarritos);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCarritos);
  });

  
  it('deberia actualizar carrito',()=>{
    const carritoCompra = new CarritoCompra('1', 2000, 2000);
    service.comprar(carritoCompra).subscribe(()=>{});
    const req = httpMock.expectOne(`${apiEndpointCarritos}`);
    expect(req.request.method).toBe('PUT');
    req.flush(carritoCompra);
  })

});
