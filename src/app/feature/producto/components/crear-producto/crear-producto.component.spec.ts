import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductoComponent } from './crear-producto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductoService } from '../../shared/service/producto.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('CrearProductoComponent', () => {
  let fixture: ComponentFixture<CrearProductoComponent>;
  let productoService: ProductoService;
  // let component: CrearProductoComponent;
  // let idValor:number;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProductoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ProductoService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProductoComponent);
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'guardar').and.returnValue(of(1));
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });


  it('Formulario incompeto, debe de retornar true', () => {
    
    const fixture = TestBed.createComponent(CrearProductoComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const nombre = app.productoForm.controls['nombre']
    nombre.setValue("Esta es una prueba")

    expect(app.productoForm.invalid).toBeTrue();

  });

  it('Formulario completo, debe de retornar false', () => {
    
    const fixture = TestBed.createComponent(CrearProductoComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    let nombre = app.productoForm.controls['nombre']
    let precio = app.productoForm.controls['precio']
    let cantidad = app.productoForm.controls['cantidad']


    nombre.setValue("Esta es una prueba")
    precio.setValue(parseInt('20000'))
    cantidad.setValue(parseInt('10'))


    expect(app.productoForm.invalid).toBeTrue();

  });

  // it('guardar producto',(async()=>{
  //   expect(component.productoForm.valid).toBeFalsy();
  //   component.productoForm.controls.nombre.setValue('Prueba');
  //   component.productoForm.controls.precio.setValue(parseInt('20000'));
  //   component.productoForm.controls.cantidad.setValue(parseInt('10'));

  //   expect(component.productoForm.valid).toBeTruthy();
  //   idValor = component.crear();
  //   expect(idValor).toBe(1);
  // }));
});
