import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarescuelaComponent } from './listarescuela.component';

describe('ListarescuelaComponent', () => {
  let component: ListarescuelaComponent;
  let fixture: ComponentFixture<ListarescuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarescuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarescuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
