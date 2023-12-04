import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuestionario2Component } from './cuestionario2.component';

describe('Cuestionario2Component', () => {
  let component: Cuestionario2Component;
  let fixture: ComponentFixture<Cuestionario2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuestionario2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuestionario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
