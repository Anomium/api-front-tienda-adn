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
    const productoService: ProductoService = TestBed.inject(ProductoService);
    expect(productoService).toBeTruthy();
  }); 

  it('deberia crear productos ', () => {
    const producto = new Producto('1','Cereal',1000,2000,'creado');

    service.guardar(producto).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointProducto);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia actualizar producto',()=>{
    const producto = new Producto('1','Cereal',1000,2000,'creado');
    service.actualizar(producto).subscribe(()=>{});
    const req = httpMock.expectOne(`${apiEndpointProducto}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(producto);
  })

  it('deberia eliminar un producto', () => {
    const dummyProducto = new Producto('1','Cereal',1000,2000,'creado');
    service.eliminar(dummyProducto).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointProducto}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia listar productos', () => {
    const dummyProductos = [
      new Producto('1','Cereal1',1000,2000,'creado'), 
      new Producto('2','Cereal2',1000,2000,'creado')
    ];
    service.consultar().subscribe(productos => {
      expect(productos.length).toBe(2);
      expect(productos).toEqual(dummyProductos);
    });
    const req = httpMock.expectOne(apiEndpointProducto);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProductos);
  });

  it('deberia listar producto', () => {
    const dummyProductos = new Producto('1','Cereal1',1000,2000,'creado');
    service.consultarPorId('1').subscribe(productos => {
      expect(productos).toEqual(dummyProductos);
    });
    const req = httpMock.expectOne(`${apiEndpointProducto}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProductos);
  });

});
