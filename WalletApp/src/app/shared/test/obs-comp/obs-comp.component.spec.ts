import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsCompComponent } from './obs-comp.component';

describe('ObsCompComponent', () => {
  let component: ObsCompComponent;
  let fixture: ComponentFixture<ObsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
