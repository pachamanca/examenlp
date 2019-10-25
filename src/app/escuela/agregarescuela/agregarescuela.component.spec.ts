import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarescuelaComponent } from './agregarescuela.component';

describe('AgregarescuelaComponent', () => {
  let component: AgregarescuelaComponent;
  let fixture: ComponentFixture<AgregarescuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarescuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarescuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
