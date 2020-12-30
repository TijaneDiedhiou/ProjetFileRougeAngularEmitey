import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailgroupecompetenceComponent } from './detailgroupecompetence.component';

describe('DetailgroupecompetenceComponent', () => {
  let component: DetailgroupecompetenceComponent;
  let fixture: ComponentFixture<DetailgroupecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailgroupecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailgroupecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
