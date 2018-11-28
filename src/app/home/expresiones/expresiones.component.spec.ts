import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpresionesComponent } from './expresiones.component';

describe('ExpresionesComponent', () => {
  let component: ExpresionesComponent;
  let fixture: ComponentFixture<ExpresionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpresionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpresionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
