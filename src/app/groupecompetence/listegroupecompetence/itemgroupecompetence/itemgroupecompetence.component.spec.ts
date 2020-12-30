import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemgroupecompetenceComponent } from './itemgroupecompetence.component';

describe('ItemgroupecompetenceComponent', () => {
  let component: ItemgroupecompetenceComponent;
  let fixture: ComponentFixture<ItemgroupecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemgroupecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemgroupecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
