import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgroupecompetenceComponent } from './addgroupecompetence.component';

describe('AddgroupecompetenceComponent', () => {
  let component: AddgroupecompetenceComponent;
  let fixture: ComponentFixture<AddgroupecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgroupecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgroupecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
