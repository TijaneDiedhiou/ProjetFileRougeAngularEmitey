import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpromosComponent } from './detailpromos.component';

describe('DetailpromosComponent', () => {
  let component: DetailpromosComponent;
  let fixture: ComponentFixture<DetailpromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
