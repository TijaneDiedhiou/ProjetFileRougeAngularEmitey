import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcompetenceComponent } from './itemcompetence.component';

describe('ItemcompetenceComponent', () => {
  let component: ItemcompetenceComponent;
  let fixture: ComponentFixture<ItemcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
