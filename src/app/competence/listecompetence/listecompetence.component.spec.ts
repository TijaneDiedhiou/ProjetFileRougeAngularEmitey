import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecompetenceComponent } from './listecompetence.component';

describe('ListecompetenceComponent', () => {
  let component: ListecompetenceComponent;
  let fixture: ComponentFixture<ListecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
