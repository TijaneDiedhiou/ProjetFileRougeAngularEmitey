import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemprofilsortieComponent } from './itemprofilsortie.component';

describe('ItemprofilsortieComponent', () => {
  let component: ItemprofilsortieComponent;
  let fixture: ComponentFixture<ItemprofilsortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemprofilsortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemprofilsortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
