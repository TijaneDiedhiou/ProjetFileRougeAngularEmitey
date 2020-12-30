import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeprofilsortieComponent } from './listeprofilsortie.component';

describe('ListeprofilsortieComponent', () => {
  let component: ListeprofilsortieComponent;
  let fixture: ComponentFixture<ListeprofilsortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeprofilsortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeprofilsortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
