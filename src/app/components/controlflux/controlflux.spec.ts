import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Controlflux } from './controlflux';

describe('Controlflux', () => {
  let component: Controlflux;
  let fixture: ComponentFixture<Controlflux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Controlflux],
    }).compileComponents();

    fixture = TestBed.createComponent(Controlflux);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
