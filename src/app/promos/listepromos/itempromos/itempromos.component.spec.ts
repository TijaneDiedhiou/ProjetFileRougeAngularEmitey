import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItempromosComponent } from './itempromos.component';

describe('ItempromosComponent', () => {
  let component: ItempromosComponent;
  let fixture: ComponentFixture<ItempromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItempromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItempromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
