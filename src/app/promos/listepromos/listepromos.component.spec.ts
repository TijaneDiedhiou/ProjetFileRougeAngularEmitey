import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepromosComponent } from './listepromos.component';

describe('ListepromosComponent', () => {
  let component: ListepromosComponent;
  let fixture: ComponentFixture<ListepromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
