import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaralumnoComponent } from './listaralumno.component';

describe('ListaralumnoComponent', () => {
  let component: ListaralumnoComponent;
  let fixture: ComponentFixture<ListaralumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaralumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaralumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
