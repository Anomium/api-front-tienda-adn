import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductoComponent } from './crear-producto.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductoService } from '../../shared/service/producto.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { SharedModule } from '@shared/shared.module';

describe('CrearProductoComponent', () => {
  let fixture: ComponentFixture<CrearProductoComponent>;
  let productoService: ProductoService;
  // let component: CrearProductoComponent;
  // let idValor:number;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CrearProductoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
      ],
      providers: [ProductoService, HttpService, DatePipe],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProductoComponent);
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'guardar').and.returnValue(of(1));
    fixture.detectChanges();
  });

  it('Formulario incompeto, debe de retornar true', () => {

    const createComponentTestbed = TestBed.createComponent(CrearProductoComponent);
    const app = createComponentTestbed.componentInstance;
    fixture.detectChanges();

    const nombre = app.productoForm.controls['nombre'];
    nombre.setValue('Esta es una prueba');

    expect(app.productoForm.invalid).toBeTrue();

  });

  it('Formulario completo, debe de retornar false', () => {

    const createComponentTestbed = TestBed.createComponent(CrearProductoComponent);
    const app = createComponentTestbed.componentInstance;
    fixture.detectChanges();

    const nombre = app.productoForm.controls['nombre'];
    const precio = app.productoForm.controls['precio'];
    const cantidad = app.productoForm.controls['cantidad'];
    const fechaCreacion = app.productoForm.controls['fechaCreacion'];


    nombre.setValue('Esta es una prueba');
    precio.setValue(parseInt('20000'));
    cantidad.setValue(parseInt('10'));
    fechaCreacion.setValue(Date.now());

    expect(app.productoForm.invalid).toBeFalse();

  });

  // it('guardar producto',(async()=>{

  //   const fixture = TestBed.createComponent(CrearProductoComponent);
  //   const app = fixture.componentInstance;
  //   fixture.detectChanges();

  //   expect(component.productoForm.valid).toBeTrue();
  //   app.productoForm.controls.nombre.setValue('Prueba');
  //   app.productoForm.controls.precio.setValue(parseInt('20000'));
  //   app.productoForm.controls.cantidad.setValue(parseInt('10'));
  //   app.productoForm.controls.fechaCreacion.setValue('2022-01-01');
  //   // component.productoForm.controls.nombre.setValue('Prueba');
  //   // component.productoForm.controls.precio.setValue(parseInt('20000'));
  //   // component.productoForm.controls.cantidad.setValue(parseInt('10'));
  //   // component.productoForm.controls.fechaCreacion.setValue('2022-01-01');
  //   expect(component.productoForm.invalid).toBeFalse();
  //   let numero = app.crear();
  //   spyOn(productoService, 'guardar').and.callFake(() =>{
  //     return of(numero)
  //   });
  //   component.crear();
  //   expect(productoService.guardar).toHaveBeenCalled();
  // }));
});
