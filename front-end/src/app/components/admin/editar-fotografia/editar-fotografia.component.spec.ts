import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFotografiaComponent } from './editar-fotografia.component';

describe('EditarFotografiaComponent', () => {
  let component: EditarFotografiaComponent;
  let fixture: ComponentFixture<EditarFotografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarFotografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
