import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcursoComponent } from './agregarcurso.component';

describe('AgregarcursoComponent', () => {
  let component: AgregarcursoComponent;
  let fixture: ComponentFixture<AgregarcursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarcursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
