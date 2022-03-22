import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarProductoComponent } from './listar-producto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductoService } from '../../shared/service/producto.service';
import { Producto } from '../../shared/model/producto';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarProductoComponent', () => {
  let component:ListarProductoComponent
  let fixture: ComponentFixture<ListarProductoComponent>;
  let productoService: ProductoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProductoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ProductoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const listaProductos: Producto[] = [new Producto('1','Cereal',2000, 10,'2022-01-01')];
    fixture = TestBed.createComponent(ListarProductoComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'consultar').and.returnValue(
      of(listaProductos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('deberia llamar lista productos', ()=>{
    expect(component.listaProductos.length).toBe(1);
  })


});
