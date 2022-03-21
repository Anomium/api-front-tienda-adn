import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarProductoComponent } from './comprar-producto.component';

describe('ComprarProductoComponent', () => {

  let fixture: ComponentFixture<ComprarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarProductoComponent);
    fixture.detectChanges();
  });


});
