import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSoporteComponent } from './crear-soporte.component';

describe('CrearSoporteComponent', () => {
  let component: CrearSoporteComponent;
  let fixture: ComponentFixture<CrearSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSoporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
