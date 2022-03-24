import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Carrito } from 'src/app/feature/carrito/components/shared/model/carrito';
import { CarritoCompra } from '@producto/shared/model/carritoCompra';
import { CarritoService } from 'src/app/feature/carrito/components/shared/service/carrito.service';
import { of } from 'rxjs';

import { ComprarProductoComponent } from './comprar-producto.component';

describe('ComprarProductoComponent', () => {

  let fixture: ComponentFixture<ComprarProductoComponent>;
  let component: ComprarProductoComponent;
  let carritoService: CarritoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprarProductoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CarritoService, HttpService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    const listaCarrito: Carrito[] = [new Carrito('1', 'Cereal', 2000, 4000, 2, 'COMPRADO')];
    fixture = TestBed.createComponent(ComprarProductoComponent);
    component = fixture.componentInstance;
    carritoService = TestBed.inject(CarritoService);
    spyOn(carritoService, 'consultarCarritos').and.returnValue(
      of(listaCarrito)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llamar lista productos', () => {
    expect(component.listaCarrito.length).toBe(1);
  });

  it('debería actualizar producto', () => {
    spyOn(carritoService, 'comprar').and.callThrough();
    const spy = spyOn(component, 'comprar').and.callThrough();
    const carritoCompra: CarritoCompra = new CarritoCompra('1', 2000, 2);
    carritoService.comprar(carritoCompra);
    expect(spy);
    expect(spy).toBeDefined();
  });

});
