import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailprofilsortieComponent } from './detailprofilsortie.component';

describe('DetailprofilsortieComponent', () => {
  let component: DetailprofilsortieComponent;
  let fixture: ComponentFixture<DetailprofilsortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailprofilsortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailprofilsortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
