import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M3Pagina1Component } from './m3-pagina1.component';

describe('M3Pagina1Component', () => {
  let component: M3Pagina1Component;
  let fixture: ComponentFixture<M3Pagina1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M3Pagina1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M3Pagina1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
