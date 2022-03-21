import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Soporte } from '@producto/shared/model/soporte';
import { SoporteService } from '@producto/shared/service/soporte.service';
import { of } from 'rxjs';

import { SoporteComponent } from './consultar-soporte.component';

describe('SoporteComponent', () => {
  let component: SoporteComponent;
  let fixture: ComponentFixture<SoporteComponent>;
  let soporteService: SoporteService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoporteComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [SoporteService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const listarSoportes:Soporte[] =[ new Soporte('1','prueba', '2022-01-01')];
    fixture = TestBed.createComponent(SoporteComponent);
    component = fixture.componentInstance;
    soporteService = TestBed.inject(SoporteService);
    spyOn(soporteService,'consultar').and.returnValue(of(listarSoportes));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
  
  it('deberia llamar lista soportes', ()=>{
    expect(component.listarSoporte.length).toBe(1);
  })

});
