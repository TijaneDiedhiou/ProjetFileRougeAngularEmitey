import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListegroupecompetenceComponent } from './listegroupecompetence.component';

describe('ListegroupecompetenceComponent', () => {
  let component: ListegroupecompetenceComponent;
  let fixture: ComponentFixture<ListegroupecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListegroupecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListegroupecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
