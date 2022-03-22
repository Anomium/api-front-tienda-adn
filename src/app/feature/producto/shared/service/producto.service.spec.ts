import { HttpResponse } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { Producto } from "../model/producto";
import { ProductoService } from "./producto.service";



describe('ProductoService', () => {
  let service: ProductoService;
  let httpMock: HttpTestingController;
  let apiEndpointProducto = `${environment.endpoint}/productos`;

  beforeEach(() => {

    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductoService, HttpService]
    });

    TestBed.configureTestingModule({});
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ProductoService);

  });

  it('should be created', () => {
    const consignacionService: ProductoService = TestBed.inject(ProductoService);
    expect(consignacionService).toBeTruthy();
  }); 

  it('deberia crear productos ', () => {
    const consignacion = new Producto('1','Cereal',1000,2000,'creado');

    service.guardar(consignacion).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointProducto);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

});
