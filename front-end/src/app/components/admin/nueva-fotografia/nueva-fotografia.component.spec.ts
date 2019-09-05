import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaFotografiaComponent } from './nueva-fotografia.component';

describe('NuevaFotografiaComponent', () => {
  let component: NuevaFotografiaComponent;
  let fixture: ComponentFixture<NuevaFotografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaFotografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaFotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
