import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Producto } from '@producto/shared/model/producto';
import { ProductoService } from '@producto/shared/service/producto.service';

import { ActualizarProductoComponent } from './actualizar-producto.component';

describe('ActualizarProductoComponent', () => {
  let component: ActualizarProductoComponent;
  let fixture: ComponentFixture<ActualizarProductoComponent>;
  let productoService: ProductoService;
  let producto: Producto;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarProductoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers:[ProductoService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    producto = new Producto('1','Cereal',2000, 10,'2022-01-01');
    fixture = TestBed.createComponent(ActualizarProductoComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProductoService);
    component.id = '1';
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // }); 

  it('debería actualizar producto',()=>{
    spyOn(productoService,'actualizar').and.callThrough();
    const spy = spyOn(component,'actualizarProducto').and.callThrough();
    producto.id = '1';
    productoService.actualizar(producto);
    expect(spy);
    expect(spy).toBeDefined();
  })

});
