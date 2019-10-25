import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarempleadoComponent } from './agregarempleado.component';

describe('AgregarempleadoComponent', () => {
  let component: AgregarempleadoComponent;
  let fixture: ComponentFixture<AgregarempleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarempleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
