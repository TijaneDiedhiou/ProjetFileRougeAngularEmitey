import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemreferentielComponent } from './itemreferentiel.component';

describe('ItemreferentielComponent', () => {
  let component: ItemreferentielComponent;
  let fixture: ComponentFixture<ItemreferentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemreferentielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemreferentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
