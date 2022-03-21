import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Soporte } from '@producto/shared/model/soporte';
import { SoporteService } from '@producto/shared/service/soporte.service';
import { of } from 'rxjs';

import { SoporteComponent } from './consultar-soporte.component';

describe('SoporteComponent', () => {
  // let component: SoporteComponent;
  let fixture: ComponentFixture<SoporteComponent>;
  let soporteService: SoporteService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const listarSoporte:Soporte[] =[ new Soporte('1','prueba', '2022-01-01')];
    fixture = TestBed.createComponent(SoporteComponent);
    // component = fixture.componentInstance;
    soporteService = TestBed.inject(SoporteService);
    spyOn(soporteService,'consultar').and.returnValue(of(listarSoporte));
    fixture.detectChanges();
  });

  
  // it('deberia llamar lista consignación', ()=>{
  //   expect(component.listarSoporte.length).toBe(1);
  // })

});
