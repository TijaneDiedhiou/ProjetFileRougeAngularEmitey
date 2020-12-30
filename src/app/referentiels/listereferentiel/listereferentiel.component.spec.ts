import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListereferentielComponent } from './listereferentiel.component';

describe('ListereferentielComponent', () => {
  let component: ListereferentielComponent;
  let fixture: ComponentFixture<ListereferentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListereferentielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListereferentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
