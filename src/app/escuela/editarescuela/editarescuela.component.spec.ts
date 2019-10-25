import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarescuelaComponent } from './editarescuela.component';

describe('EditarescuelaComponent', () => {
  let component: EditarescuelaComponent;
  let fixture: ComponentFixture<EditarescuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarescuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarescuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
