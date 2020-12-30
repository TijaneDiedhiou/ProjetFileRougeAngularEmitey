import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailreferentielsComponent } from './detailreferentiels.component';

describe('DetailreferentielsComponent', () => {
  let component: DetailreferentielsComponent;
  let fixture: ComponentFixture<DetailreferentielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailreferentielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailreferentielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
